<template>
  <a
    :href="link"
    target="_blank"
    class="block border-4 border-green-500 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
  >
    <img :src="imgUrl" alt="Project image" class="w-full h-48 object-cover" />
    <div class="p-4 bg-gray-800">
      <h3 class="text-lg font-bold text-white">{{ title }}</h3>
      <span class="inline-block mt-2 px-2 py-1 text-sm text-white bg-green-500 rounded-full">{{ date }}</span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
