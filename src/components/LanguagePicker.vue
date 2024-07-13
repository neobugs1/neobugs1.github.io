<template>
  <div class="flex justify-center items-center">
    <a
      :class="{ 'text-gray-500 cursor-not-allowed': locale === 'en' }"
      @click="changeLanguage('en')"
      :disabled="locale === 'en'"
      href="#"
      class="md:px-1 py-1 hover:text-gray-600 text-sm transition duration-200 ease-in-out"
      >EN</a
    >
    <span class="mx-1.5 text-lg">|</span>
    <a
      :class="{ 'text-gray-500 cursor-not-allowed': locale === 'mk' }"
      @click="changeLanguage('mk')"
      :disabled="locale === 'mk'"
      href="#"
      class="md:px-1 py-1 hover:text-gray-600 text-sm transition duration-200 ease-in-out"
      >MK</a
    >
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { locale } = useI18n();
    const changeLanguage = (lang) => {
      locale.value = lang;
    };
    return { locale, changeLanguage };
  },
};
</script>
