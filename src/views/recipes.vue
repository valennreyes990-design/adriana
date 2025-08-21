<script setup lang="ts">
import { onMounted, ref } from "vue";
import Cook from "@/components/cook.vue";

interface Recipe {
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
  reactions: {
    likes: number;
    disLikes: number;
  }[];
  rating: number;
  mealType: string;
  ingredients: string[];
  instructions: string[];
}

const result = ref<Recipe[]>([]);

async function consultarRecipes() {
  result.value = (
    await (await fetch("https://dummyjson.com/recipes")).json()
  ).recipes;
}

onMounted(() => {
  consultarRecipes();
});
</script>
<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4 font-serif text-pink-700 shadow-xl">
      Recetas de Cocina
    </h1>

    <div class="font-serif text-gray-400" v-if="result.length === 0">
      Cargando recetas...
    </div>
    <div class="grid md:grid-cols-3">
      <Cook
        v-for="recipe in result"
        :id="recipe.id"
        :calories-per-serving="recipe.caloriesPerServing"
        :cook-time-minutes="recipe.cookTimeMinutes"
        :servings="recipe.servings"
        :difficulty="recipe.difficulty"
        :cuisine="recipe.cuisine"
        :prep-time-minutes="recipe.prepTimeMinutes"
        :tags="recipe.tags"
        :image="recipe.image"
        :rating="recipe.rating"
        :meal-type="recipe.mealType"
        :name="recipe.name"
        :ingredients="recipe.ingredients"
        :instructions="recipe.instructions"
      >
      </Cook>
    </div>
  </div>
</template>
