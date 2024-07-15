<template>
  <header class="flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-950 text-white">
    <LanguagePicker />
    <h1 class="text-xl fixed left-1/2 -translate-x-1/2">{{ $t("welcome.name") }}</h1>
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
