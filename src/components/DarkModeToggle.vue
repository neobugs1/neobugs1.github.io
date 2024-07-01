<template>
  <button @click="toggleTheme" class="px-4 py-2 bg-gray-200 dark:bg-gray-800 dark:text-white">{{ theme }} Mode</button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const theme = ref("Light");
    const toggleTheme = () => {
      document.body.classList.toggle("dark");
      theme.value = theme.value === "Light" ? "Dark" : "Light";
    };
    return { theme, toggleTheme };
  },
};
</script>
