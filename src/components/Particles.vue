<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-green-600 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-900"
  >
    <div id="particles-js"></div>
    <div
      class="welcome-text text-center text-white rounded-2xl border border-green-600 dark:border-gray-500 p-8 shadow-2xl opacity-80 bg-gradient-to-r from-green-400 to-green-500 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-900"
    >
      <h1>{{ name }}</h1>
      <h2>{{ title }}</h2>
      <div class="flex justify-center mt-4 space-x-4">
        <a href="mailto:nikola.smileski@gmail.com" target="_blank">
          <div class="p-4 bg-transparent border shadow-lg rounded hover:bg-gray-800">
            <Icon icon="mdi:email" class="text-white text-2xl" />
          </div>
        </a>
        <a href="https://github.com/neobugs1" target="_blank">
          <div class="p-4 bg-transparent border shadow-lg rounded hover:bg-gray-800">
            <Icon icon="mdi:github" class="text-white text-2xl" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/nikola-smileski-437b721a1/" target="_blank">
          <div class="p-4 bg-transparent border shadow-lg rounded hover:bg-gray-800">
            <Icon icon="mdi:linkedin" class="text-white text-2xl" />
          </div>
        </a>
        <a href="https://i.imgur.com/1yCIRC8.jpeg" target="_blank">
          <div class="p-4 bg-transparent border shadow-lg rounded hover:bg-gray-800">
            <Icon icon="mdi:file-document" class="text-white text-2xl" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  data() {
    return {
      name: "Никола Смилески",
      title: "Software Engineer",
    };
  },
  mounted() {
    particlesJS.load("particles-js", "particlesjs-config.json");
  },
  computed: {
    isDarkMode() {
      return window.themeMode === "dark";
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.welcome-text {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}

.welcome-text h1 {
  font-size: 4rem;
  margin: 0;
}

.welcome-text h2 {
  font-size: 2rem;
  margin: 0;
}
</style>
