<template>
  <div>
    <Particles />
    <AboutMe />
    <Projects />
    <Experience />
    <Skills />
    <RecentActivity />
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe.vue";
import Skills from "../components/Skills.vue";
import Experience from "../components/Experience.vue";
import Projects from "../components/Projects.vue";
import RecentActivity from "../components/RecentActivity.vue";
import Particles from "../components/Particles.vue";

export default {
  components: { AboutMe, Skills, Experience, Projects, RecentActivity, Particles },
};
</script>
