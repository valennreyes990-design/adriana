<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  title: string;
  content: string;
  date: string;
  image: string
}>();
</script>

<template>
      <div class="flex flex-col p-10 space-y-6 rounded-lg bg-pink-300">
      <div class="text-sm leading-5 md:text-lg font-serif"> {{ content }}
      </div>
      <div class="flex space-x-4">
        <img :src="image" alt=""
        class="w-10 h-10 rounded-full p-1"/>
        <div>
          <div class="text-sm font-semibold"> {{ title }}</div>
          <div class="text-xs font-extralight">{{ date }}</div>
        </div>
      </div>
    </div>
</template>
