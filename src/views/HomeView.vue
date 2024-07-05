<template>
  <div>
    <Particles />
    <AboutMe />
    <Projects />
    <Experience />
    <Skills />
    <RecentActivity />
    <ContactMe />
    <button
      v-if="showScrollToTop"
      @click="scrollToTop"
      class="fixed bottom-4 right-4 p-3 rounded-full bg-gray-600 text-white shadow-lg hover:bg-gray-700 transition"
    >
      <Icon icon="mdi:chevron-up" class="text-white text-2xl" />
    </button>
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe.vue";
import Skills from "../components/Skills.vue";
import Experience from "../components/Experience.vue";
import Projects from "../components/Projects.vue";
import RecentActivity from "../components/RecentActivity.vue";
import Particles from "../components/Particles.vue";
import ContactMe from "../components/ContactMe.vue";

import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";

export default {
  components: { AboutMe, Skills, Experience, Projects, RecentActivity, Particles, ContactMe, Icon },
  setup() {
    const showScrollToTop = ref(false);

    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        showScrollToTop.value = window.scrollY > aboutSection.offsetTop;
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { showScrollToTop, scrollToTop };
  },
};
</script>
