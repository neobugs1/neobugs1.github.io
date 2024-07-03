<template>
  <div class="bg-white dark:bg-gray-800 dark:text-white">
    <div class="p-8 w-2/4 mx-auto">
      <h2 class="text-2xl font-bold text-center mb-1">My Skills</h2>
      <div class="h-0.5 bg-green-500 w-20 mx-auto mb-6" />

      <div class="space-y-8">
        <div>
          <h3 class="text-xl font-semibold mb-2">Programming Languages</h3>
          <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
            <SkillCard name="C#" icon="simple-icons:csharp" />
            <SkillCard name="Java" icon="ri:java-fill" />
            <SkillCard name="JavaScript" icon="ri:javascript-fill" />
            <SkillCard name="Python" icon="simple-icons:python" />
          </div>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-2">Front-End</h3>
          <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
            <SkillCard name="Bootstrap" icon="ri:bootstrap-fill" />
            <SkillCard name="CSS" icon="akar-icons:css-fill" />
            <SkillCard name="HTML" icon="akar-icons:html-fill" />
            <SkillCard name="React" icon="akar-icons:react-fill" />
            <SkillCard name="Tailwind CSS" icon="ri:tailwind-css-fill" />
          </div>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-2">Back-End and Databases</h3>
          <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
            <SkillCard name="Django" icon="simple-icons:django" />
            <SkillCard name="MongoDB" icon="simple-icons:mongodb" />
            <SkillCard name="MySQL" icon="simple-icons:mysql" />
            <SkillCard name="PostgreSQL" icon="akar-icons:postgresql-fill" />
            <SkillCard name="Spring" icon="simple-icons:spring" />
            <SkillCard name="SQLite" icon="simple-icons:sqlite" />
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
