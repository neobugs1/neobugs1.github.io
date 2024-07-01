<template>
  <section class="flex flex-row gap-48 justify-center bg-gray-100 dark:bg-gray-900 dark:text-white overflow-hidden p-8">
    <h2 class="text-4xl h-12 font-semibold mb-4 border-b-2 border-green-500">About Me</h2>
    <div class="relative w-full max-w-2xl">
      <div class="ml-10">
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
