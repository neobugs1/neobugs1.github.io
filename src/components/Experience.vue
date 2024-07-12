<template>
  <section
    class="flex flex-col md:flex-row gap-8 md:gap-16 justify-center bg-gray-100 dark:bg-gray-900 dark:text-white overflow-hidden p-8 shadow-[inset_0_11px_8px_-10px_rgba(0,0,0,0.1),inset_0_-24px_24px_-10px_rgba(0,0,0,0.1)]"
  >
    <div class="flex flex-col items-center md:items-start">
      <h2 class="text-2xl md:text-4xl md:h-12 font-semibold mb-4 border-b-2 border-green-500 text-black dark:text-white">Experience</h2>
    </div>
    <div class="relative w-full max-w-2xl">
      <!-- Connecting line -->
      <div
        class="absolute transform -translate-x-1/2 bg-green-500"
        :style="{ top: `calc(${firstJobHeight / 2}px)`, height: `calc(120% - ${firstJobHeight / 2}px)`, width: '3px' }"
      ></div>
      <!-- Job entries -->
      <div v-for="(job, index) in jobs" :key="index" class="relative mb-10 md:mb-20">
        <!-- Circle -->
        <div
          :class="[
            'absolute top-1/2 transform -translate-x-1/2 h-4 w-4 rounded-full border-2 border-green-500',
            job.isPresent ? 'bg-green-500 pulsating-circle' : 'bg-gray-100 dark:bg-gray-900',
          ]"
        ></div>
        <!-- Job details -->
        <div ref="jobDetails" class="ml-8 md:ml-10 p-4 border rounded shadow-lg bg-white dark:bg-gray-900 hover:shadow-xl">
          <h3 class="text-lg font-semibold text-black dark:text-white">{{ job.title }}</h3>
          <p class="text-sm text-black dark:text-white">{{ job.company }}</p>
          <p class="text-sm text-black dark:text-white">{{ job.duration }}</p>
          <p class="mt-2 text-black dark:text-white">{{ job.description }}</p>
          <ul class="list-disc mt-2 ml-4 md:ml-8">
            <li v-for="point in job.points" class="text-black dark:text-white text-sm" :key="point">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          title: "Software Engineer Internship",
          company: "InTec System",
          duration: "March 2024 - June 2024 • Skopje, Macedonia",
          description: "Worked as a software engineering intern at InTec System.",
          points: [
            "Developed Document Management Systems (DMS) and automation processes.",
            "Focused on front-end development using React.",
            "Contributed to creating user-friendly interfaces and integrating DMS features.",
            "Gained practical experience in building efficient and scalable web applications.",
          ],
          isPresent: false,
        },
        {
          title: "Student",
          company: "Faculty of Computer Science and Engineering",
          duration: "September 2019 - Present • Skopje, Macedonia",
          description: "As a student I learned many things, including:",
          points: [
            "Algorithms and Data Structures",
            "Object Oriented Programming",
            "Structural Programming",
            "Web Development",
            "Operating Systems",
            "Computer Networks",
            "Computer Architecture",
            "Database Management Systems",
          ],
          isPresent: true,
        },
      ],
      firstJobHeight: 0,
    };
  },
  mounted() {
    this.updateFirstJobHeight();
    window.addEventListener("resize", this.updateFirstJobHeight);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateFirstJobHeight);
  },
  methods: {
    updateFirstJobHeight() {
      this.$nextTick(() => {
        this.firstJobHeight = this.$refs.jobDetails[0]?.offsetHeight || 0;
      });
    },
  },
};
</script>

<style>
.pulsating-circle {
  position: absolute;
  width: 20px;
  height: 20px;

  &:before {
    content: "";
    position: relative;
    display: block;
    width: 300%;
    height: 300%;
    box-sizing: border-box;
    margin-left: -100%;
    margin-top: -100%;
    border-radius: 45px;
    background-color: rgb(0, 78, 0);
    animation: pulse-ring 2.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 214, 0);
    border-radius: 15px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    animation: pulse-dot 2.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.33);
  }
  80%,
  100% {
    opacity: 0;
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.7);
  }
}
</style>
