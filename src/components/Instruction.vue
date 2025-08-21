<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  title: string;
  content: string;
  image: string
}>();

</script>

<template>
  <div
    class="flex flex-col items-center bg-amber-200 rounded-2xl"
  >
    <img :src="image" alt="" class="w-3/12 p-1" />
    <div class="z-10 mt-6 text-xl text-center font-bold p-5">
      {{ title }}
    </div>
    <div class="text-center m-10 font-light">
      {{ content }}
    </div>
  </div>
</template>
