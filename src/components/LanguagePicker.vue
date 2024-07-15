<template>
  <div class="flex justify-start items-center w-1/12">
    <button
      :class="{ 'text-gray-500 cursor-not-allowed': locale === 'en' }"
      @click="changeLanguage('en')"
      :disabled="locale === 'en'"
      class="md:px-1 py-1 hover:text-gray-600 text-sm transition duration-200 ease-in-out"
    >
      EN
    </button>
    <span class="mx-1.5 text-lg">|</span>
    <button
      :class="{ 'text-gray-500 cursor-not-allowed': locale === 'mk' }"
      @click="changeLanguage('mk')"
      :disabled="locale === 'mk'"
      class="md:px-1 py-1 hover:text-gray-600 text-sm transition duration-200 ease-in-out"
    >
      MK
    </button>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { nextTick, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const { locale } = useI18n();
    let scrollPosition = 0;
    let isChangingLanguage = false;

    const disableScroll = (event) => {
      if (isChangingLanguage) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    };

    const changeLanguage = async (lang) => {
      scrollPosition = window.scrollY;
      isChangingLanguage = true;
      locale.value = lang;
      await nextTick();
      setTimeout(() => {
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        isChangingLanguage = false;
      }, 0);
    };

    onMounted(() => {
      window.addEventListener("scroll", disableScroll, { passive: false });
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", disableScroll);
    });

    return { locale, changeLanguage };
  },
};
</script>
