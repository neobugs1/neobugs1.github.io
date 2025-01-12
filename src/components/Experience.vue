<template>
  <section
    class="flex flex-col md:flex-row gap-8 md:gap-16 justify-center bg-gray-100 dark:bg-gray-900 dark:text-white overflow-hidden p-8 shadow-[inset_0_11px_8px_-10px_rgba(0,0,0,0.1),inset_0_-24px_24px_-10px_rgba(0,0,0,0.1)]"
  >
    <div class="flex flex-col items-center md:items-start">
      <h2 class="text-2xl md:text-4xl md:h-12 font-semibold mb-4 border-b-2 border-green-500 text-black dark:text-white">
        {{ t("experience.sectionTitle") }}
      </h2>
    </div>
    <div class="relative w-full max-w-2xl">
      <!-- Connecting line -->
      <div
        class="absolute transform -translate-x-1/2 bg-green-500"
        :style="{ top: `calc(${firstJobHeight / 1.7}px)`, height: `calc(120% - ${firstJobHeight / 2}px)`, width: '3px' }"
      ></div>
      <!-- Job entries -->
      <div v-for="(job, index) in translatedJobs" :key="index" class="relative mb-10 md:mb-20">
        <!-- Circle -->
        <div
          :class="[
            'absolute top-1/2 transform -translate-x-1/2 h-4 w-4 rounded-full',
            job.isPresent ? 'pulsating-circle' : ' border-2 border-green-500 bg-gray-100 dark:bg-gray-900',
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
import { useI18n } from "vue-i18n";
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";

export default {
  setup() {
    const { t, locale } = useI18n();
    const firstJobHeight = ref(0);
    const jobDetails = ref([]);

    const jobs = [
      {
        title: "experience.jobs.2.title",
        company: "experience.jobs.2.company",
        duration: "experience.jobs.2.duration",
        description: "experience.jobs.2.description",
        points: ["experience.jobs.2.points.0", "experience.jobs.2.points.1", "experience.jobs.2.points.2", "experience.jobs.2.points.3"],
        isPresent: true,
      },
      {
        title: "experience.jobs.0.title",
        company: "experience.jobs.0.company",
        duration: "experience.jobs.0.duration",
        description: "experience.jobs.0.description",
        points: ["experience.jobs.0.points.0", "experience.jobs.0.points.1", "experience.jobs.0.points.2", "experience.jobs.0.points.3"],
        isPresent: false,
      },
      {
        title: "experience.jobs.1.title",
        company: "experience.jobs.1.company",
        duration: "experience.jobs.1.duration",
        description: "experience.jobs.1.description",
        points: [
          "experience.jobs.1.points.0",
          "experience.jobs.1.points.1",
          "experience.jobs.1.points.2",
          "experience.jobs.1.points.3",
          "experience.jobs.1.points.4",
          "experience.jobs.1.points.5",
          "experience.jobs.1.points.6",
          "experience.jobs.1.points.7",
        ],
        isPresent: false,
      },
    ];

    const translatedJobs = computed(() => {
      return jobs.map((job) => {
        return {
          title: t(job.title),
          company: t(job.company),
          duration: t(job.duration),
          description: t(job.description),
          points: job.points.map((point) => t(point)),
          isPresent: job.isPresent,
        };
      });
    });

    const updateFirstJobHeight = () => {
      nextTick(() => {
        firstJobHeight.value = jobDetails.value[0]?.offsetHeight || 0;
      });
    };

    watch(locale, () => {
      updateFirstJobHeight();
      console.log(`Locale changed to: ${locale.value}`);
    });

    onMounted(() => {
      updateFirstJobHeight();
      window.addEventListener("resize", updateFirstJobHeight);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateFirstJobHeight);
    });

    return {
      t,
      translatedJobs,
      firstJobHeight,
      jobDetails,
      updateFirstJobHeight,
    };
  },
};
</script>

<style>
.pulsating-circle {
  position: absolute;
  width: 20px;
  height: 20px;
}

.pulsating-circle::before {
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

.pulsating-circle::after {
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
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>

<style>
.pulsating-circle {
  position: absolute;
  width: 20px;
  height: 20px;
}

.pulsating-circle::before {
  content: "";
  position: relative;
  display: block;
  width: 300%;
  height: 300%;
  box-sizing: border-box;
  margin-left: -100%;
  margin-top: -100%;
  border-radius: 45px;
  background-color: #00ff4b;
  animation: pulse-ring 2.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

.pulsating-circle::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgb(3, 211, 3);
  border-radius: 15px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  animation: pulse-dot 2.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.13);
  }
  80%,
  100% {
    opacity: 0;
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>
