<script setup lang="ts">
import { defineProps } from "vue";

const post = defineProps<{
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    disLikes: number;
  }[];
  views: number;
}>();
</script>

<template>
  <div>
    <div class="p-4 m-2 rounded shadow-2xl font-light bg-pink-200">
      <h3 class="text-xl font-bold mb-2 text-pink-400 font-serif">
        {{ title }}
      </h3>
      <p class="mb-2">{{ body }}</p>

      <div class="flex flex-wrap gap-2 mb-2">
        <span
          v-for="tag in tags"
          class="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded"
        >
          #{{ tag }}
        </span>
      </div>
      <div class="flex flex-wrap gap-2 mb-2 space-x-2">
        <div>
          <img
            src="https://api.iconify.design/material-symbols:favorite-outline-rounded.svg"
          />
        </div>
        <div>
          <img
            src="https://api.iconify.design/icon-park-outline:share-one.svg"
          />
        </div>
        <div>
          <img src="https://api.iconify.design/iconamoon:share-2-duotone.svg" />
        </div>
        <div>
          <img src="https://api.iconify.design/uil:comment.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
