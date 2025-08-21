<script setup="ts">
import Tarjeta from "@/components/Tarjeta.vue";

const tarjetitas = [
  {
    title: "Pantalones",
    image: "/images/pantalones.webp",
    subtitle: "Precio",
    subtitle1: "Tallas",
    subtitle2: "Colores",
  },

  {
    title: "Blusas",
    image: "/images/blusa.jpg",
    subtitle: "Precio",
    subtitle1: "Tallas",
    subtitle2: "Colores",
  },

  {
    title: "Faldas",
    image: "/images/faldas.jpg",
    subtitle: "Precio",
    subtitle1: "Tallas",
    subtitle2: "Colores",
  },
];
</script>
<template>
  <div class="flex flex-col md:flex-row font-serif bg-pink-200">
    <div class="md:w-8/12 p-5 overflow-y-auto">
      <div class="flex gap-4">
        <div class="w-1/2 p-2">
          <img src="/images/vestido.webp" alt="" class="h-full w-" />
        </div>
        <div class="w-1/2 p-2 font-serif space-y-4">
          <p class="text-4xl font-bold text-purple-500 underline">Vestidos</p>
          <p class="text-2xl font-bold text-blue-400">Precio</p>
          <p>60 $</p>
          <div class="border-2 m-1 text-purple-600"></div>
          <p class="text-2xl font-bold text-blue-400">Talla</p>
          <ul class="list-disc ml-5">
            <li>XS</li>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
          <div class="border-2 m-1 text-purple-600"></div>
          <p class="text-2xl font-bold text-blue-400">Colores</p>
          <div class="flex items-center gap-2 mb-2">
            <div class="w-5 h-5 rounded bg-lime-500"></div>
            <span>Verde</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <div class="w-5 h-5 rounded bg-cyan-300"></div>
            <span>Celeste</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <div class="w-5 h-5 rounded bg-yellow-400"></div>
            <span>Amarillo</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <div class="w-5 h-5 rounded bg-pink-400"></div>
            <span>Rosado</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <div class="w-5 h-5 rounded bg-purple-400"></div>
            <span>Morado</span>
          </div>
        </div>
      </div>
    </div>

    <div class="md:w-4/12 p-5 bg-gray-200">
      <p class="text-4xl text-orange-400 underline font-bold p-4">
        Relacionados
      </p>
      <div class="flex flex-col gap-4 space-y-5 m-8">
        <Tarjeta
          v-for="related in tarjetitas"
          :title="related.title"
          :image="related.image"
          :subtitle="related.subtitle"
          :subtitle1="related.subtitle1"
          :subtitle2="related.subtitle2"
        />
      </div>
    </div>
  </div>
</template>
