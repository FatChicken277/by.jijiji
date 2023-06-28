<script setup>
import { ref, watch } from "vue";
import emailjs from "@emailjs/browser";

const name = ref("");
const email = ref("");
const message = ref("");
const isNameValid = ref(false);
const isEmailValid = ref(false);
const isMsgValid = ref(false);

const msg = {
  name: "",
  email: "",
  message: "",
};

const click = ref(false);
const submit = ref("Submit");

watch(name, (value) => {
  name.value = value;
  validateName(value);
});

watch(email, (value) => {
  email.value = value;
  validateEmail(value);
});

watch(message, (value) => {
  message.value = value;
  validateMessage(value);
});

function validateName(value) {
  if (/^.+$/.test(value)) {
    msg["name"] = "";
    isNameValid.value = true;
  } else {
    msg["name"] = "Name Cannot Be Empty";
    isNameValid.value = false;
  }
}

function validateEmail(value) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    msg["email"] = "";
    isEmailValid.value = true;
  } else {
    msg["email"] = "Invalid Email Address";
    isEmailValid.value = false;
  }
}

function validateMessage(value) {
  if (/^.+$/.test(value)) {
    msg["message"] = "";
    isMsgValid.value = true;
  } else {
    msg["message"] = "Message Cannot Be Empty";
    isMsgValid.value = false;
  }
}

function sendEmail(e) {
  click.value = true;

  emailjs
    .sendForm(
      "service_g71f9b9",
      "template_qtjsy9k",
      e.target,
      "GDwlkqohEjVmKTGFb"
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
        location.reload();
      },
      (error) => {
        console.log("FAILED...", error.text);
        submit.value = "FAILED...";
      }
    );
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center px-[10%] lg:px-[20%] xl:px-[35%]"
  >
    <div class="flex-grow-1 flex w-full flex-col items-center py-10">
      <h1 class="mb-20 mt-10 text-3xl">GET IN TOUCH</h1>
      <form class="flex w-full flex-col text-lg" @submit.prevent="sendEmail">
        <!-- Name -->
        <label for="full name">NAME</label>
        <input
          class="mt-3 h-10 border-2 border-white bg-transparent p-2"
          type="text"
          aria-label="name input"
          required
          name="user_name"
          v-model="name"
        />
        <span v-if="msg.name" class="pt-2 text-base">- {{ msg.name }}</span>
        <!-- Email -->
        <label class="mt-5" for="email">EMAIL</label>
        <input
          class="mt-3 h-10 border-2 border-white bg-transparent p-2"
          type="email"
          aria-label="email input"
          required
          name="user_email"
          v-model="email"
        />
        <span v-if="msg.email" class="pt-2 text-base">- {{ msg.email }}</span>
        <!-- TEXT -->
        <label class="mt-5" for="message">MESSAGE</label>
        <textarea
          class="mt-3 resize-none border-2 border-white bg-transparent p-2"
          rows="5"
          type="text"
          aria-label="message input"
          required
          name="message"
          v-model="message"
        ></textarea>
        <span v-if="msg.message" class="pt-2 text-base"
          >- {{ msg.message }}</span
        >
        <!-- BTN -->
        <input
          :class="{
            disabled: !isNameValid || !isEmailValid || !isMsgValid || click,
          }"
          class="mt-16 cursor-pointer bg-red-950 py-3"
          type="submit"
          aria-label="submit input"
          :value="submit"
          :disabled="!isNameValid || !isEmailValid || !isMsgValid || click"
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
.disabled {
  background-color: gray;
  cursor: not-allowed;
}
</style>
