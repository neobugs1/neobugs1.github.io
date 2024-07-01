<template>
  <div>
    <Skills />
    <Experience />
    <Projects />
  </div>
</template>

<script>
import Skills from "../components/Skills.vue";
import Experience from "../components/Experience.vue";
import Projects from "../components/Projects.vue";

export default {
  components: { Skills, Experience, Projects },
};
</script>
