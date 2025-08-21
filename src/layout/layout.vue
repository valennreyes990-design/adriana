<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function handleRouter(route: string) {
  router.push(route);
}
</script>

<template>
  <header class="text-black">
    <div class="flex">
      <img src="/images/baby-shower.png" alt="" class="w-1/12" />
      <div class="w-11/12 flex items-center justify-center bg-blue-200" @click="router.push('index')">
        <h1 class="font-extrabold text-center font-serif text-pink-400 underline text-2xl">
          Dulce Bienvenida!!
        </h1>
      </div>
    </div>
    <div class="flex items-center h-20 w-full bg-blue-200 pl-10">
      <nav class="space-x-6">
        <a
          @click="handleRouter('/ubication')"
          class="text-x1 text-md-right font-serif hover:text-pink-400"
          >Ubicación encantadora</a
        >
        <a @click="handleRouter('/dress')" class="text-x1 font-serif hover:text-pink-400"
          >Dress code pastel</a
        >
        <a @click="handleRouter('/gift')" class="text-x1 font-serif hover:text-pink-400"
          >Lista de regalos</a
        >
        <a @click="handleRouter('/post')" class="text-x1 font-serif hover:text-pink-400"
          >Posts</a
        >
         <a @click="handleRouter('/recipe')" class="text-x1 font-serif hover:text-pink-400"
          >Recetas</a
        >
      </nav>
    </div>
  </header>
  <router-view/>
</template>
