<template>
  <div class="flex flex-col md:flex-row justify-between bg-pink-200">
    <div class="md:w-1/2 font-serif space-y-4 p-5">
      <p class="font-bold text-2xl m-2 p-2 text-green-600">Direccion</p>
      <div class="space-y-3">
        <div class="p-5 bg-amber-200 rounded-2xl">
          <p>
            Conjunto Jardines del Sol, Urbanización Ciudad Bella, Quito, Ecuador
          </p>
        </div>
        <div class="p-5 bg-amber-200 rounded-2xl">
          <p>
            Te esperamos para compartir un momento inolvidable lleno de alegría,
            amor y buenos recuerdos.
          </p>
        </div>
      </div>
      <p class="font-bold text-2xl text-fuchsia-700 m-2 p-2">Contactos</p>
      <div class="bg-pink-300 rounded-3xl p-5">
        <p>097 527 8425</p>
        <p>098 645 2531</p>
      </div>
    </div>
    <div class="border-2 m-2"></div>
    <div class="md:w-1/2 sm:h-100 md:h-auto m-5 rounded-2xl border">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9489.39002263043!2d-78.48373888414515!3d-0.18719248932785887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a80ad7792f3%3A0x9fddd7c411e6e910!2sHotel%20Dann%20Carlton%20Quito!5e0!3m2!1ses!2sec!4v1755188030570!5m2!1ses!2sec"
        loading="lazy"
        width="100%"
        height="100%"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  </div>
</template>
<script setup="ts"></script>
