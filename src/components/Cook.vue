<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const recipe = defineProps<{
  id: number;
  name: string;
  prepTimeMinutes: string;
  cookTimeMinutes: string;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  image: string;
  rating: number;
  mealType: string;
  ingredients: string[];
  instructions: string[];
}>();

const router = useRouter();
</script>
<template>
  <div class="p-4 m-2 rounded shadow-lg font-light bg-pink-200">
    <h3 class="text-xl font-bold mb-2 text-pink-400 font-serif">
      {{ name }}
    </h3>

    <img :src="image" class="w-full h-48 object-cover rounded-lg shadow mb-3" />

    <div class="mt-4">
      <h4 class="text-sm font-semibold text-gray-700 mb-2">Ingredientes:</h4>
      <ul class="list-disc list-inside text-sm text-gray-800 space-y-1">
        <li v-for="ingredient in ingredients">
          {{ ingredient }}
        </li>
      </ul>
    </div>

    <div class="flex flex-col flex-wrap gap-2 mb-2">
      <div class="flex space-x-2 m-2">
        <div>
          <img
            src="https://api.iconify.design/material-symbols:timer.svg"
            alt=""
          />
          {{ prepTimeMinutes }}
        </div>
        <div>
          <span
            class="text-xs text-white px-2 py-1 rounded"
            :style="`background-color: ${
              difficulty === 'Easy' ? 'green' : 'orange'
            } ;`"
          >
            {{ difficulty }}
          </span>
        </div>
        <div>
          <img
            src="https://api.iconify.design/material-symbols:nest-clock-farsight-analog-outline-rounded.svg"
            alt=""
          />
          {{ cookTimeMinutes }}
        </div>
        <div>
          <img
            src="https://api.iconify.design/icon-park:chart-proportion.svg"
            alt=""
          />
          {{ servings }}
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mb-2">
        <div class="flex items-center space-x-2 text-sm text-gray-700 mb-2">
          <img
            src="https://api.iconify.design/mdi:silverware-fork-knife.svg"
            alt="Cuisine"
            class="w-4 h-4"
          />
          <span
            class="italic font-medium bg-gray-300 px-2 py-0.5 rounded shadow-inner border border-gray-300"
          >
            {{ cuisine }}
          </span>
        </div>
        <div class="flex items-center space-x-2 text-sm text-gray-800">
          <img
            src="https://api.iconify.design/mdi:fire.svg"
            alt="Calories"
            class="w-4 h-4 text-red-500"
          />
          <span
            class="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-semibold"
          >
            {{ caloriesPerServing }} kcal
          </span>
        </div>
      </div>
      <hr class="my-2 border-t border-pink-300" />
      <div class="space-x-2">
        <span
          v-for="tag in tags"
          class="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded"
        >
          #{{ tag }}
        </span>
      </div>
      <div
        class="italic font-medium bg-amber-200 px-2 py-0.5 rounded shadow-inner border-gray-900 m-2 text-center text-amber-800"
      >
        <button @click="router.push(`/recipe/${id}`)">Ver Receta</button>
      </div>
    </div>
  </div>
</template>
