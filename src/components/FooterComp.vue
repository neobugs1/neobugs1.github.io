<template>
  <footer class="flex bg-gray-100 dark:bg-gray-900 text-white py-8 justify-center shadow-[inset_0_11px_8px_-10px_rgba(0,0,0,0.2)]">
    <div class="flex justify-between items-center w-4/5">
      <div class="flex gap-2 w-1/3 justify-start">
        <p class="font-bold text-xl text-black dark:text-white">{{ $t("footer.name") }}</p>
        <p class="font-bold text-xl text-green-500">{{ $t("footer.lastName") }}</p>
      </div>

      <div id="contrib">
        <a href="https://github.com/neobugs1/neobugs1.github.io" class="text-gray-500 hover:underline">{{ $t("footer.openSource") }}</a>
      </div>

      <div class="flex gap-2 w-1/3 justify-end">
        <a href="https://github.com/neobugs1" target="_blank" class="text-3xl hover:text-green-500">
          <Icon icon="mdi:github" color="#5bc733" />
        </a>
        <a href="https://www.linkedin.com/in/nikola-smileski-437b721a1/" target="_blank" class="text-3xl hover:text-green-500">
          <Icon icon="mdi:linkedin" color="#5bc733" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Footer",
  components: {
    Icon,
  },
};
</script>

<style scoped>
@media (max-width: 1024px) {
  #contrib {
    display: none;
  }
}
</style>
