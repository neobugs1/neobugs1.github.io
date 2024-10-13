<template>
  <div class="p-4 md:p-8 bg-white dark:bg-gray-800">
    <div class="w-full md:w-4/5 lg:w-3/5 mx-auto">
      <h2 class="text-xl md:text-2xl font-bold text-center mb-1 text-gray-900 dark:text-white">
        {{ t("projects.sectionTitle") }}
      </h2>
      <div class="h-0.5 bg-green-500 w-16 mx-auto mb-6"></div>

      <p class="text-center text-sm text-gray-800 dark:text-gray-400 mb-4">
        {{ t("projects.description") }}
      </p>

      <!-- Filters for projects -->
      <div class="flex justify-center flex-wrap mb-4">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="setActiveFilter(filter)"
          :class="[
            'px-3 py-1 md:px-4 md:py-2 mr-2 mb-2 rounded-full text-sm',
            activeFilter === filter ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300',
          ]"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Main Project Highlight -->
      <div class="mb-8">
        <div
          class="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center justify-center transition duration-300 transform hover:scale-105 cursor-pointer"
          @click="openMainProject"
        >
          <div class="flex justify-center mb-4 space-x-2">
            <span class="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-full"> spring </span>
            <span class="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-full"> react </span>
            <span class="inline-block px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-full"> postgres </span>
          </div>
          <h3 class="text-2xl font-bold mb-4">sklopi.mk</h3>
          <p class="text-white dark:text-gray-100 description text-sm">
            {{ t("projects.highlightProject") }}
          </p>
        </div>
      </div>

      <!-- Other Projects -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
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
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import ProjectCard from "./ProjectCard.vue";
import ProjectModal from "./ProjectModal.vue";

export default {
  components: {
    ProjectCard,
    ProjectModal,
  },
  methods: {
    openMainProject() {
      window.open("https://sklopi.mk", "_blank");
    },
  },
  setup() {
    const { t } = useI18n();
    const activeFilter = ref("all");
    const selectedProject = ref(null);

    const filters = ["all", "spring", "laravel", "postgres", "react", "bootstrap", "docker", "c", "csharp", "makefile"];

    const projects = computed(() => [
      {
        id: 1,
        title: t("projects.projectList.0.title"),
        description: t("projects.projectList.0.description"),
        tags: ["laravel", "inertia", "react", "postgres"],
        link: "https://github.com/neobugs1/Offer-Oasis",
      },
      {
        id: 2,
        title: t("projects.projectList.1.title"),
        description: t("projects.projectList.1.description"),
        tags: ["spring", "bootstrap", "docker", "postgres"],
        link: "https://github.com/neobugs1/DAS_PROEKT",
      },
      {
        id: 3,
        title: t("projects.projectList.2.title"),
        description: t("projects.projectList.2.description"),
        tags: ["c", "makefile"],
        link: "https://github.com/neobugs1/Chip-8-Emulator",
      },
      {
        id: 4,
        title: t("projects.projectList.3.title"),
        description: t("projects.projectList.3.description"),
        tags: ["csharp", "windows forms"],
        link: "https://github.com/neobugs1/Click-To-Win",
      },
    ]);

    const filteredProjects = computed(() => {
      if (activeFilter.value === "all") {
        return projects.value;
      }
      return projects.value.filter((project) => project.tags.includes(activeFilter.value));
    });

    const setActiveFilter = (filter) => {
      activeFilter.value = filter;
    };

    const viewProjectDetails = (link) => {
      selectedProject.value = link;
    };

    return {
      t,
      activeFilter,
      filters,
      filteredProjects,
      setActiveFilter,
      viewProjectDetails,
      selectedProject,
    };
  },
};
</script>
