<template>
  <div class="p-8 dark:bg-gray-800 text-gray-700 dark:text-white">
    <h2 class="text-4xl font-semibold mb-4 border-b-2 border-green-500 w-80 text-center mx-auto">Recent Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProjectCard
        title="Offer Oasis"
        date="March 2024"
        imgUrl="https://github.com/neobugs1/Offer-Oasis/assets/82407556/85917ef6-754e-4397-8666-e93843be15c7"
        link="https://github.com/username/project-one"
      />
      <ProjectCard
        title="Justice is Served"
        date="January 2024"
        imgUrl="https://user-images.githubusercontent.com/82407556/206926463-1cecfca7-1865-414f-9821-12b924c4c0db.png"
        link="https://github.com/username/project-two"
      />
      <ProjectCard
        title="Click To Win"
        date="December 2022"
        imgUrl="https://github.com/Metodij-Buzharovski/Click-To-Win/assets/81751906/4d106833-8434-493b-a62b-93d06c002c89"
        link="https://github.com/username/project-three"
      />
      <ProjectCard
        title="Chip 8 Emulator"
        date="April 2022"
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/5/54/Space_intercept.png"
        link="https://github.com/username/project-four"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    fetch("https://api.github.com/users/neobugs1/repos")
      .then((response) => response.json())
      .then((data) => {
        this.projects = data.slice(0, 4); // Get the latest 4 projects
      });
  },
};
</script>
