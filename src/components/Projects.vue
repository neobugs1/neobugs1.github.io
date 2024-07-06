<template>
  <div class="p-8 bg-white dark:bg-gray-800">
    <div class="w-3/5 mx-auto">
      <h2 class="text-2xl font-bold text-center mb-1 text-gray-900 dark:text-white">Projects</h2>
      <div class="h-0.5 bg-green-500 w-16 mx-auto mb-6" />

      <p class="text-center text-sm text-gray-800 dark:text-gray-400 mb-4">
        This page lists some of my personal and work projects. Every project has some story, click on the title to read.
      </p>
      <div class="flex justify-center mb-4">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="setActiveFilter(filter)"
          :class="[
            'px-4 py-2 mr-2 rounded-full text-sm',
            activeFilter === filter ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300',
          ]"
        >
          {{ filter }}
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :link="project.link"
          @view-details="viewProjectDetails"
        />
      </div>
      <ProjectModal v-if="selectedProject" :repoUrl="selectedProject" :isVisible="!!selectedProject" @close="selectedProject = null" />
    </div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import ProjectModal from "./ProjectModal.vue";

export default {
  components: {
    ProjectCard,
    ProjectModal,
  },
  data() {
    return {
      activeFilter: "all",
      filters: ["all", "spring", "laravel", "postgres", "react", "bootstrap", "docker", "c", "c#", "makefile"],
      projects: [
        {
          id: 1,
          title: "Offer Oasis",
          description: "Offer Oasis е веб апликација која служи за споделување огласи.",
          tags: ["laravel", "inertia", "react", "postgres"],
          link: "https://github.com/neobugs1/Offer-Oasis",
        },
        {
          id: 2,
          title: "Justice is Served",
          description: "Веб апликација која содржи база со сите локации на затвори и затвореници во Македонија.",
          tags: ["spring", "bootstrap", "docker", "postgres"],
          link: "https://github.com/neobugs1/DAS_PROEKT",
        },
        {
          id: 3,
          title: "Chip8 Emulator",
          description: "Емулатор / интерпретер Chip-8.",
          tags: ["c", "makefile"],
          link: "https://github.com/neobugs1/Chip-8-Emulator",
        },
        {
          id: 4,
          title: "Click To Win",
          description:
            "Click To Win е инркрементална игра. Целта на играта е да се соберат што е можно повеќе поени со кликање се додека немаш доволно за да купиш надградби кои со тек на време сами ќе ти носат поени.",
          tags: ["c#", "windows forms"],
          link: "https://github.com/neobugs1/Click-To-Win",
        },
      ],
      selectedProject: null,
    };
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === "all") {
        return this.projects;
      }
      return this.projects.filter((project) => project.tags.includes(this.activeFilter));
    },
  },
  methods: {
    setActiveFilter(filter) {
      this.activeFilter = filter;
    },
    viewProjectDetails(link) {
      this.selectedProject = link;
    },
  },
};
</script>
