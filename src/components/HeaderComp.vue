<template>
  <header class="flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-950 text-white">
    <LanguagePicker />
    <h1 class="text-xl font-bold">Your Name</h1>
    <DarkModeToggle />
  </header>
</template>

<script>
import LanguagePicker from "./LanguagePicker.vue";
import DarkModeToggle from "./DarkModeToggle.vue";

export default {
  components: {
    LanguagePicker,
    DarkModeToggle,
  },
};
</script>
