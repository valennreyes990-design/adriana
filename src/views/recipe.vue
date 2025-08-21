<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRoute();
const recipeId = router.params.id;

const result = ref<any>(null);

async function consultarRecipes() {
  const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
  result.value = await res.json();
}

onMounted(() => {
  consultarRecipes();
});
</script>
<template>
    <div
      class="max-w-3xl mx-auto p-6 bg-white rounded shadow text-gray-800 font-serif"
    >
      <div v-if="result">
        <h1
          class="text-3xl font-bold text-pink-500 mb-4 italic shadow text-center"
        >
          {{ result.name }}
        </h1>

        <img
          :src="result.image"
          class="w-full h-64 object-cover rounded-lg shadow mb-6"
        />

        <div class="space-y-2 text-base leading-relaxed">
          <p>
            <strong>Calorías por porción:</strong>
            {{ result.caloriesPerServing }} kcal
          </p>
          <p>
            <strong>Tiempo de preparación:</strong>
            {{ result.prepTimeMinutes }} min
          </p>
          <p>
            <strong>Tiempo de cocción:</strong> {{ result.cookTimeMinutes }} min
          </p>
          <p><strong>Porciones:</strong> {{ result.servings }}</p>
          <p>
            <strong>Dificultad:</strong>
            <span
              class="inline-block px-2 py-1 rounded text-white text-sm"
              :class="{
                'bg-green-500': result.difficulty === 'Easy',
                'bg-orange-500': result.difficulty !== 'Easy',
              }"
            >
              {{ result.difficulty }}
            </span>
          </p>
          <p><strong>Cocina:</strong> {{ result.cuisine }}</p>
        </div>

        <div class="mt-6">
          <h2 class="text-2xl font-semibold text-pink-600 mb-2 italic">
            Ingredientes
          </h2>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li v-for="(ingredient, i) in result.ingredients" :key="i">
              {{ ingredient }}
            </li>
          </ul>
        </div>

        <div class="mt-6">
          <h1 class="m-2 font-bold italic text-2xl text-amber-700">
            Metodo de preparacion
          </h1>
          <ul class="list-disc list-inside space-y-1 text-gray-700">
            <li v-for="(instructions, i) in result.instructions" :key="i">
              {{ instructions }}
            </li>
          </ul>
        </div>

        <div v-if="result.tags && result.tags.length" class="mt-6">
          <h3 class="text-lg font-bold text-emerald-600 mb-2 italic">
            Hashtags
          </h3>
          <div class="space-x-2">
            <span
              v-for="(tag, index) in result.tags"
              :key="index"
              class="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>

      <div class="text-center text-gray-400 italic mt-8" v-else>
        Cargando...
      </div>
    </div>
</template>

<style>
@keyframes square-in-top-right {
  from {
    clip-path: inset(100% 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

[transition-style="in:square:top-right"] {
  animation: 2.5s cubic-bezier(0.25, 1, 0.3, 1) square-in-top-right both;
}

.div-animation {
  animation: 2.5s cubic-bezier(0.25, 1, 0.3, 1) square-in-top-right both;
}
</style>
