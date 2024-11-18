<template>
  <div id="contact" class="bg-white dark:bg-gray-800 dark:text-white py-8">
    <div class="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900 border dark:border-gray-600 shadow-md rounded-lg">
      <h2 class="text-3xl font-bold text-center mb-6 text-black dark:text-white">{{ $t("contactMe.title") }}</h2>

      <form @submit.prevent="sendEmail">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t("contactMe.name") }}</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm dark:text-black"
          />
        </div>

        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t("contactMe.message") }}</label>
          <textarea
            id="message"
            v-model="form.message"
            required
            rows="4"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm dark:text-black"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {{ $t("contactMe.submit") }}
        </button>
      </form>
      <!-- Divider -->
      <hr class="border-t border-gray-300 dark:border-gray-600 my-4" />

      <!-- Copy Email Section -->
      <div class="text-center flex justify-center items-center align-middle gap-2">
        <button @click="copyEmail">
          <Icon icon="mdi:content-copy" style="height: 24px; width: 24px" />
        </button>
        <p class="font-semibold text-green-600">nikola.smileski23@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { Icon } from "@iconify/vue";
export default {
  data() {
    return {
      form: {
        name: "",
        message: "",
      },
    };
  },
  methods: {
    sendEmail() {
      const serviceID = "service_vc790fm";
      const templateID = "template_7ux5xhi";
      const userID = "5mvEgxyg8tYSE_B0R";

      emailjs
        .send(serviceID, templateID, this.form, userID)
        .then((response) => {
          alert("Email sent successfully!");
          this.form.name = "";
          this.form.message = "";
        })
        .catch((error) => {
          alert("Failed to send email. Please try again later.");
        });
    },
    copyEmail() {
      navigator.clipboard.writeText("nikola.smileski23@gmail.com").then(
        () => {
          alert("Email copied to clipboard!");
        },
        (err) => {
          console.error("Could not copy text: ", err);
        }
      );
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped>
#contact {
  padding: 2rem;
}

input[type="text"],
textarea {
  background-color: #ffffff;
}
</style>
