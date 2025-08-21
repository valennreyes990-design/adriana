<script setup lang="ts">
import Card from "@/components/Card.vue";
import Instruction from "@/components/Instruction.vue";
import { ref } from "vue";

const instructionList = [
  {
    title: "Ubicación encantadora",
    description: "Jardines del Sol, Ciudad Bella",
    image: "/images/flowers.png",
  },
  {
    title: "Dress code pastel",
    description: "Vestimenta en tonos pastel (rosado, blanco, beige)",
    image: "/images/brand.png",
  },
  {
    title: "Lista de regalos",
    description: "Ver deseos",
    image: "/images/gift-box.png",
  },
];

const auxTitle = ref("");
const description = ref("");
const date = ref("");
const image = ref("");

const opinions = ref([
  {
    description:
      "“Ya esperamos con emoción a Valentina. ¡Gracias por celebrar con nosotros!”",
    title: "Familia Ramírez",
    date: "16 de julio de 2025",
    image: "/images/fam1.webp",
  },
  {
    description:
      "“Cada detalle está lleno de amor. ¡Va a ser un día inolvidable!”",
    title: "Amiga Laura",
    date: "22 de julio de 2025",
    image: "/images/chica.webp",
  },
  {
    description: "“No vemos la hora de compartir este momento tan especial.”",
    title: "Carla Gómez",
    date: "30 de julio de 2025",
    image: "/images/chica2.jpeg",
  },
]);

function addReview() {
  opinions.value.push({
    description: description.value,
    title: auxTitle.value,
    date: date.value,
    image: image.value,
  });
  auxTitle.value = "";
  description.value = "";
  image.value = "";
  date.value = "";
}
</script>

<template>
  <div
    class="container mx-auto px-6 text-center md:pt-20 pb-52 bg-lime-200 rounded-full m-10"
  >
    <img src="/images/mother (1).png" alt="" class="mx-auto" />
    <p
      class="relative z-10 mt-6 text-xl text-center font-bold p-10 text-pink-400"
    >
      ¡Bienvenidos a nuestra celebración!
    </p>
    <p class="text-center p-5 font-bold">
      Baby Shower de Valentina – Sábado 28 de septiembre, 4:00 PM
    </p>
    <button class="p-3 rounded-full w-52 bg-pink-400 hover:scale-95 font-serif">
      Confirmar asistencia
    </button>
  </div>
  <div class="flex justify-center w-full">
    <img src="/images/ribbon.png" alt="" class="w-10" />
  </div>
  <div class="grid md:grid-cols-3 gap-2 p-4">
    <Instruction
      v-for="item in instructionList"
      :title="item.title"
      :content="item.description"
      :image="item.image"
    />
  </div>
  <div class="flex justify-center w-full">
    <img src="/images/ribbon.png" alt="" class="w-10" />
  </div>
  <div>
    <div class="grid md:grid-cols-3 gap-2 p-4">
      <Card
        v-for="coment in opinions"
        :content="coment.description"
        :title="coment.title"
        :date="coment.date"
        :image="coment.image"
      />
    </div>

    <div class="justify-center flex">
      <form>
        <div class="grid grid-cols-2 grid-rows-2">
          <div>
            <label>titulo</label>
            <input class="border ml-2" v-model="auxTitle" />
          </div>
          <div>
            <label>desc</label>
            <input class="border ml-2" v-model="description" />
          </div>
          <div>
            <label>fecha</label>
            <input class="border ml-2" v-model="date" />
          </div>
          <div>
            <label>image</label>
            <input class="border ml-2" v-model="image" />
          </div>
        </div>

        <input
          class="bg-amber-400 rounded-2xl p-5"
          @click="addReview"
          value="Agregar Review"
        />
      </form>
    </div>
  </div>
</template>

<style scoped></style>
