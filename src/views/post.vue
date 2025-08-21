<script setup lang="ts">
import { onMounted, ref } from "vue";
import Tweet from "@/components/Tweet.vue";

interface Post {
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    disLikes: number;
  }[];
  views: number;
}

const result = ref<Post[]>([]);

async function consultarPosts() {
  result.value = (
    await (await fetch("https://dummyjson.com/posts")).json()
  ).posts;
}

onMounted(() => {
  consultarPosts();
});
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4 font-serif text-blue-800 shadow-xl">
      Posts
    </h1>

    <div class="font-serif text-gray-400" v-if="result.length === 0">
      Cargando posts...
    </div>

    <div class="grid md:grid-cols-2" v-else>
      <Tweet
        v-for="post in result"
        :title="post.title"
        :body="post.body"
        :tags="post.tags"
        :reactions="post.reactions"
        :views="post.views"
      />
    </div>
  </div>
</template>
