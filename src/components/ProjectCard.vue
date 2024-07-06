<template>
  <div
    @click="viewDetails"
    class="block rounded-lg overflow-hidden transform hover:scale-105 border border-gray-200 dark:border-gray-600 transition-transform cursor-pointer bg-gray-50 dark:bg-gray-900"
  >
    <div class="p-4">
      <div class="flex mb-4 space-x-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="inline-block px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-800 dark:text-gray-300 dark:bg-gray-700 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
      <h3 class="text-lg font-bold text-black dark:text-white mb-2">{{ title }}</h3>
      <p class="text-gray-800 dark:text-gray-400 mb-4 description text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    viewDetails() {
      this.$emit("view-details", this.link);
    },
  },
};
</script>

<style scoped>
.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 3;
  max-height: 4.5em;
}
</style>
