<template>
  <div>
    <AboutMe />
    <Projects />
    <Experience />
    <Skills />
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe.vue";
import Skills from "../components/Skills.vue";
import Experience from "../components/Experience.vue";
import Projects from "../components/Projects.vue";

export default {
  components: { AboutMe, Skills, Experience, Projects },
};
</script>
