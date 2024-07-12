<template>
  <section
    id="about"
    class="flex flex-col md:flex-row gap-4 md:gap-16 justify-center bg-gray-100 dark:bg-gray-900 dark:text-white overflow-hidden p-8 shadow-[inset_0_-11px_8px_-10px_rgba(0,0,0,0.1)]"
  >
    <div>
      <h2 class="text-2xl md:text-4xl font-semibold text-black text-center dark:text-white">About Me</h2>
      <div class="h-0.5 bg-green-500 w-20 md:w-48 mx-auto" />
    </div>

    <div class="relative w-full max-w-2xl">
      <div class="md:mt-0 ml-0 md:ml-10">
        <p class="mt-2 text-gray-700 dark:text-gray-200">{{ aboutMe }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      aboutMe:
        "Software engineer with a passion for web development, algorithms, and user-friendly interfaces. Currently studying at the Faculty of Computer Science and Engineering. Enthusiastic about creating efficient solutions and exploring new technologies.",
    };
  },
};
</script>
