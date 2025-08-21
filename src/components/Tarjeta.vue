<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  title: string;
  image: string;
  prices: string;
  tallas: {
    nombre: string
  }[];
  colors: {
    nombre:string,
    codigo:string
  }[];
}>();
</script>

<template>
  <div class="bg-orange-300 rounded-3xl p-4 w-full font-serif">
    <div class="text-2xl font-bold mb-4 text-center text-orange-900">
      {{ title }}
    </div>

    <div class="flex flex-row items-center gap-4">
      <div class="w-1/2">
        <img :src="image" alt="" class="w-full h-auto rounded-2xl" />
      </div>

      <div class="w-1/2 p-4 flex flex-col gap-4">
        <div class="p-2 rounded bg-amber-200">
          <h2 class="text-2xl font-bold text-orange-600">Precio</h2>
          <p class="text-gray-800 mt-1">{{ prices }}</p>
        </div>

        <div class="p-2 rounded bg-amber-200">
          <h2 class="text-2xl font-bold text-orange-600">Talla</h2>
          <ul class="list-disc ml-5">
            <li v-for="talla in tallas">{{ talla.nombre }}</li>
          </ul>
        </div>
        <div class="p-2 rounded bg-amber-200">
          <h2 class="text-2xl font-bold text-orange-600">Colores</h2>
          <div v-for="color in colors" class="flex items-center gap-2 mb-2">
            <div class="w-5 h-5 rounded" :style="`background-color: ${color.codigo};`" >
            </div>
            <span>{{ color.nombre }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
