<template>
  <transition name="modal-fade">
    <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50" @click.self="closeModal">
      <div
        class="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-xl relative w-11/12 max-w-3xl h-4/5 border border-gray-700 transform transition-transform duration-300 overflow-hidden"
        :class="{ 'scale-0': !isVisible, 'scale-100': isVisible }"
      >
        <div
          class="flex justify-between items-center bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-3 rounded-lg m-4 text-black dark:text-white"
        >
          <div class="flex gap-2">
            <a :href="repoUrl" target="_blank" class="text-blue-500 hover:underline">{{ repoName.split("/")[1] }}</a>
            <p>/</p>
            <p>README.md</p>
          </div>
          <button
            @click="closeModal"
            class="text-white bg-gray-100 dark:bg-gray-600 p-1 border border-gray-300 dark:border-gray-500 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Icon icon="line-md:close" height="14" color="lightgray" />
          </button>
        </div>
        <div
          :class="[
            'markdown-body',
            isDarkMode ? 'markdown-body-dark' : 'markdown-body-light',
            'p-12',
            'border',
            'border-gray-300 dark:border-gray-700',
            'rounded-lg',
            'overflow-y-auto',
            'custom-scrollbar',
          ]"
        >
          <div v-if="readmeContent" v-html="readmeContent"></div>
          <div v-else class="text-gray-400">Loading...</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import { marked } from "marked";
import "github-markdown-css/github-markdown.css";
import { Icon } from "@iconify/vue";

export default {
  props: {
    repoUrl: {
      type: String,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      readmeContent: null,
    };
  },
  computed: {
    repoName() {
      return this.repoUrl.split("/").slice(-2).join("/");
    },
    isDarkMode() {
      return window.themeMode == "dark";
    },
  },
  mounted() {
    this.fetchReadme();
  },
  watch: {
    repoUrl(newValue) {
      if (newValue) {
        this.fetchReadme();
      }
    },
    isVisible(newVal) {
      if (newVal) {
        this.fetchReadme();
      }
    },
  },
  methods: {
    async fetchReadme() {
      try {
        const repoName = this.repoUrl.split("/").slice(-2).join("/");
        const response = await axios.get(`https://api.github.com/repos/${repoName}/readme`, {
          headers: { Accept: "application/vnd.github.v3.raw" },
        });
        this.readmeContent = marked(response.data);
      } catch (error) {
        console.error("Error fetching README.md:", error);
        this.readmeContent = "Failed to load README.md content.";
      }
    },
    closeModal() {
      this.$emit("close");
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.custom-scrollbar {
  overflow-y: auto;
  height: calc(100% - 60px);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 10px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #2d2d2d;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.markdown-body-light {
  color: #24292e;
  background-color: #f7f7f7;
  --color-prettylights-syntax-comment: #6e7781;
  --color-prettylights-syntax-constant: #0550ae;
  --color-prettylights-syntax-entity: #8250df;
  --color-prettylights-syntax-storage-modifier-import: #24292f;
  --color-prettylights-syntax-entity-tag: #116329;
  --color-prettylights-syntax-keyword: #cf222e;
  --color-prettylights-syntax-string: #0a3069;
  --color-prettylights-syntax-variable: #953800;
  --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
  --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
  --color-prettylights-syntax-invalid-illegal-bg: #82071e;
  --color-prettylights-syntax-carriage-return-text: #f6f8fa;
  --color-prettylights-syntax-carriage-return-bg: #cf222e;
  --color-prettylights-syntax-string-regexp: #116329;
  --color-prettylights-syntax-markup-list: #3b2300;
  --color-prettylights-syntax-markup-heading: #0550ae;
  --color-prettylights-syntax-markup-italic: #24292f;
  --color-prettylights-syntax-markup-bold: #24292f;
  --color-prettylights-syntax-markup-deleted-text: #82071e;
  --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
  --color-prettylights-syntax-markup-inserted-text: #116329;
  --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
  --color-prettylights-syntax-markup-changed-text: #953800;
  --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
  --color-prettylights-syntax-markup-ignored-text: #eaeef2;
  --color-prettylights-syntax-markup-ignored-bg: #0550ae;
  --color-prettylights-syntax-meta-diff-range: #8250df;
  --color-prettylights-syntax-brackethighlighter-angle: #57606a;
  --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
  --color-prettylights-syntax-constant-other-reference-link: #0a3069;
}
.markdown-body-dark {
  color: #f6f8fa;
  background-color: #0d1117;
  --color-prettylights-syntax-comment: #6e7781;
  --color-prettylights-syntax-constant: #0550ae;
  --color-prettylights-syntax-entity: #8250df;
  --color-prettylights-syntax-storage-modifier-import: #24292f;
  --color-prettylights-syntax-entity-tag: #116329;
  --color-prettylights-syntax-keyword: #cf222e;
  --color-prettylights-syntax-string: #0a3069;
  --color-prettylights-syntax-variable: #953800;
  --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
  --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
  --color-prettylights-syntax-invalid-illegal-bg: #82071e;
  --color-prettylights-syntax-carriage-return-text: #f6f8fa;
  --color-prettylights-syntax-carriage-return-bg: #cf222e;
  --color-prettylights-syntax-string-regexp: #116329;
  --color-prettylights-syntax-markup-list: #3b2300;
  --color-prettylights-syntax-markup-heading: #0550ae;
  --color-prettylights-syntax-markup-italic: #24292f;
  --color-prettylights-syntax-markup-bold: #24292f;
  --color-prettylights-syntax-markup-deleted-text: #82071e;
  --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
  --color-prettylights-syntax-markup-inserted-text: #116329;
  --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
  --color-prettylights-syntax-markup-changed-text: #953800;
  --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
  --color-prettylights-syntax-markup-ignored-text: #eaeef2;
  --color-prettylights-syntax-markup-ignored-bg: #0550ae;
  --color-prettylights-syntax-meta-diff-range: #8250df;
  --color-prettylights-syntax-brackethighlighter-angle: #57606a;
  --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
  --color-prettylights-syntax-constant-other-reference-link: #0a3069;
}
</style>
