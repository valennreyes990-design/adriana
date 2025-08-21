<script setup="ts">
import Tarjeta from "@/components/Tarjeta.vue";
import { ref } from "vue";

const auxTitle = ref("");
const image = ref("");
const price = ref("");
const talla = ref([]);
const colores = ref([]);
const objeto = ref({ estado: false });

const availableColors = ref([
  { nombre: "rosado", codigo: "#FFB6C1" },
  { nombre: "verde", codigo: "#07ff1cff" },
  { nombre: "rojo", codigo: "#ff0000ff" },
]);

const tallitas = ref([
  { nombre: "XS" },
  { nombre: "S" },
  { nombre: "M" },
  { nombre: "L" },
  { nombre: "XL" },
  { nombre: "XXL" },
  { nombre: "XXXL" },
]);

const tarjetitas = ref([
  /* {
    title: "Osito de Peluche",
    image: "/images/osito.jpg",
    price: "13$",
    tallas: [{ nombre: "xs" }, { nombre: "l" }],
    color: [
      { nombre: "rosado", codigo: "#d639a5ff" },
      { nombre: "verde", codigo: "#07ff1cff" },
      { nombre: "rojo", codigo: "#ff0000ff" },
    ],
  },
  {
    title: "Ropa de Niña",
    image: "/images/ropa niña.webp",
    price: "12$",
    tallas: [{ nombre: "xs" }, { nombre: "l" }],
    color: [
      { nombre: "rosado", codigo: "#d639a5ff" },
      { nombre: "verde", codigo: "#07ff1cff" },
      { nombre: "rojo", codigo: "#ff0000ff" },
    ],
  }, */
]);

function producto() {
  objeto.value.estado = true
}

function cerrar(){
  objeto.value.estado = false
}

function hola() {
  console.log(colores.value);

  tarjetitas.value.push({
    title: auxTitle.value,
    image: image.value,
    price: price.value,
    tallas: talla.value,
    color: colores.value,
  });
  auxTitle.value = "";
  image.value = "";
  price.value = "";
  talla.value = [];
  colores.value = [];
}
</script>
<template>
  <div class="bg-lime-200">
    <h1 class="text-center font-bold font-serif text-blue-900 text-5xl p-10">
      Lista de Regalos
    </h1>
    <button class="bg-blue-300 rounded-4xl p-5 font-bold m-5" @click.prevent="producto">
      Agregar Producto
    </button>
    <div v-if="objeto.estado" class="flex justify-center">
      <form class="relative bg-amber-200 p-5 rounded-xl shadow-md w-full max-w-3xl"> 
        <button class="absolute top-2 right-4 w-8 h-8 rounded-full border text-red-600 text-xl font-bold flex items-center justify-center hover:bg-gray-500 hover:text-red-800" @click.prevent="cerrar">
          X
        </button>
        <div class="grid grid-cols-2 gap-6 font-serif">
          <div>
            <label class="text-pink-500 font-extrabold m-5">Nombre</label>
            <input
              class="border ml-2 bg-pink-200 rounded-3xl"
              v-model="auxTitle"
            />
          </div>
          <div>
            <label class="text-pink-500 font-extrabold m-5">Image</label>
            <input
              class="border ml-2 bg-pink-200 rounded-3xl"
              v-model="image"
            />
          </div>
          <div>
            <label class="text-pink-500 font-extrabold m-5">Precio</label>
            <input
              class="border ml-2 bg-pink-200 rounded-3xl"
              v-model="price"
            />
          </div>

          <div>
            <label class="text-pink-500 font-extrabold m-5">Talla</label>

            <li v-for="auxTalla in tallitas">
              <input type="checkbox" :value="auxTalla" v-model="talla" />
              <label>{{ auxTalla.nombre }}</label>
            </li>
          </div>

          <div>
            <label class="text-pink-500 font-extrabold m-5">Colores</label>

            <li v-for="color in availableColors">
              <input type="checkbox" :value="color" v-model="colores" />
              <label>{{ color.nombre }}</label>
            </li>
          </div>
        </div>
        <button class="bg-pink-300 rounded-4xl p-5 font-bold m-5" @click.prevent="hola">
          Agregar
        </button>
      </form>
    </div>
    <div class="justify-end flex m-10"></div>
    <div
      v-if="tarjetitas.length > 0"
      class="grid grid-cols-1 lg:grid-cols-3 gap-6 px-8"
    >
      <Tarjeta
        v-for="related in tarjetitas"
        :title="related.title"
        :image="related.image"
        :price="related.price"
        :tallas="related.tallas"
        :colors="related.color"
      />
    </div>
    <div v-else>
      <span>No hay elementos</span>
    </div>
  </div>
</template>