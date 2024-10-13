<template>
  <div
    id="screen"
    class="relative flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-green-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-900"
  >
    <div id="particles-js" class="absolute inset-0"></div>
    <div
      class="welcome-text text-center text-white rounded-2xl border border-green-600 dark:border-gray-500 p-8 shadow-2xl opacity-80 bg-gradient-to-r from-green-400 to-green-500 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-900"
    >
      <h1 class="text-3xl md:text-6xl md:p-4 mb-2">{{ $t("welcome.name") }}</h1>
      <h2 class="text-lg md:text-3xl md:mb-6">{{ $t("welcome.title") }}</h2>
      <div class="flex flex-wrap justify-center mt-4 space-x-2 md:space-x-4">
        <a href="mailto:nikola.smileski23@gmail.com" target="_blank">
          <div class="p-3 md:p-4 bg-transparent border shadow-lg rounded hover:bg-green-500 dark:hover:bg-gray-800">
            <Icon icon="mdi:email" class="text-white text-xl md:text-2xl" />
          </div>
        </a>
        <a href="https://github.com/neobugs1" target="_blank">
          <div class="p-3 md:p-4 bg-transparent border shadow-lg rounded hover:bg-green-500 dark:hover:bg-gray-800">
            <Icon icon="mdi:github" class="text-white text-xl md:text-2xl" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/nikola-smileski-437b721a1/" target="_blank">
          <div class="p-3 md:p-4 bg-transparent border shadow-lg rounded hover:bg-green-500 dark:hover:bg-gray-800">
            <Icon icon="mdi:linkedin" class="text-white text-xl md:text-2xl" />
          </div>
        </a>
        <a href="/cv.pdf" target="_blank">
          <div class="p-3 md:p-4 bg-transparent border shadow-lg rounded hover:bg-green-500 dark:hover:bg-gray-800">
            <Icon icon="mdi:file-document" class="text-white text-xl md:text-2xl" />
          </div>
        </a>
      </div>
    </div>
    <button @click="scrollToAbout" class="absolute bottom-5 p-3 md:p-4 bg-transparent border shadow-lg rounded-full hover:bg-gray-800 z-50">
      <Icon icon="mdi:chevron-down" class="text-white text-xl md:text-2xl" />
    </button>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n();
    return { t };
  },
  mounted() {
    particlesJS.load("particles-js", "particlesjs-config.json");
  },
  methods: {
    scrollToAbout() {
      const aboutSection = document.getElementById("about");
      const headerHeight = document.querySelector("header") ? document.querySelector("header").offsetHeight : 0;
      if (aboutSection) {
        const topPosition = aboutSection.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: topPosition,
          behavior: "smooth",
        });
      }
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}

#screen {
  height: 100svh;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.welcome-text {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}
</style>
