<template>
  <div class="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-gray-100 dark:bg-gray-900 dark:border-gray-600">
    <Icon :icon="icon" style="color: #5bc733; width: 48px; height: 48px" />
    <span class="text-sm font-medium text-black dark:text-white">{{ name }}</span>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped>
.skill-icon {
  width: 48px;
  height: 48px;
}
</style>
