<template>
  <select @change="changeLanguage($event)" class="px-2 py-1 border rounded">
    <option value="en">English</option>
    <option value="mk">Macedonian</option>
  </select>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { locale } = useI18n();
    const changeLanguage = (event) => {
      locale.value = event.target.value;
    };
    return { changeLanguage };
  },
};
</script>
