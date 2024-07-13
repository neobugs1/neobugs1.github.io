<template>
  <button class="theme-toggle rounded bg-gray-700 dark:bg-gray-800 p-2 md:mr-4 hover:bg-gray-600 dark:hover:bg-gray-700" @click="toggleTheme">
    <div class="sun-moon">
      <span class="sun" v-if="theme === 'Light'"><Icon icon="bi:sun-fill" style="color: #5bc733" /></span>
      <span class="moon" v-else><Icon icon="bi:moon-fill" style="color: #5bc733" /></span>
    </div>
  </button>
</template>

<script>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

export default {
  setup() {
    const theme = ref("Light");
    window.themeMode = "light";
    const toggleTheme = () => {
      document.body.classList.toggle("dark");
      theme.value = theme.value === "Light" ? "Dark" : "Light";
      window.themeMode = theme.value.toLowerCase();
    };
    return { theme, toggleTheme };
  },
  components: {
    Icon,
  },
};
</script>
