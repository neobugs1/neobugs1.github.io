<template>
  <div class="bg-white dark:bg-gray-800 dark:text-white p-4 md:p-8">
    <div class="w-full md:w-3/4 lg:w-3/5 mx-auto">
      <h2 class="text-xl md:text-2xl font-bold text-center mb-1 text-black dark:text-white">{{ $t("mySkills.title") }}</h2>
      <div class="h-0.5 bg-green-500 w-20 mx-auto mb-6"></div>

      <div class="space-y-8">
        <div>
          <h3 class="text-lg md:text-xl font-semibold mb-2 text-black dark:text-white">{{ $t("mySkills.programmingLanguages") }}</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <SkillCard name="Java" icon="ri:java-fill" />
            <SkillCard name="JavaScript" icon="ri:javascript-fill" />
            <SkillCard name="C#" icon="simple-icons:csharp" />
            <SkillCard name="Python" icon="simple-icons:python" />
            <SkillCard name="C" icon="tabler:hexagon-letter-c-filled" />
            <SkillCard name="PHP" icon="akar-icons:php-fill" />
          </div>
        </div>

        <div>
          <h3 class="text-lg md:text-xl font-semibold mb-2 text-black dark:text-white">Front-End</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <SkillCard name="HTML" icon="akar-icons:html-fill" />
            <SkillCard name="CSS" icon="akar-icons:css-fill" />
            <SkillCard name="React" icon="akar-icons:react-fill" />
            <SkillCard name="Bootstrap" icon="ri:bootstrap-fill" />
            <SkillCard name="Tailwind CSS" icon="ri:tailwind-css-fill" />
            <SkillCard name="Chakra UI" icon="simple-icons:chakraui" />
            <SkillCard name="Next.js" icon="simple-icons:nextdotjs" />
          </div>
        </div>

        <div>
          <h3 class="text-lg md:text-xl font-semibold mb-2 text-black dark:text-white">{{ $t("mySkills.backendAndDatabases") }}</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <SkillCard name="Spring" icon="simple-icons:spring" />
            <SkillCard name="PostgreSQL" icon="akar-icons:postgresql-fill" />
            <SkillCard name="Laravel" icon="lineicons:laravel" />
            <SkillCard name="Django" icon="simple-icons:django" />
            <SkillCard name="MongoDB" icon="simple-icons:mongodb" />
            <SkillCard name="MySQL" icon="simple-icons:mysql" />
            <SkillCard name="SQLite" icon="simple-icons:sqlite" />
            <SkillCard name="NestJS" icon="simple-icons:nestjs" />
            <SkillCard name="Firestore" icon="simple-icons:firebase" />
            <SkillCard name="Elasticsearch" icon="simple-icons:elasticsearch" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from "./SkillCard.vue";

export default {
  components: {
    SkillCard,
  },
};
</script>
