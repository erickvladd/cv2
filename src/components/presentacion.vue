<script setup>
  // No necesitamos JS por ahora, así que se queda vacío.
</script>

<template>  
  
  <div class = "flex flex-col items-center">
    <div>
     <a class="text-5xl text-white font-titulo">Hola, soy</a>
     <a class = "text-5xl text-purple-500 font-titulo ml-2">Erick Vladimir</a>
    </div>


    <div class = "mt-5">
     <a class = "text-4xl text-white font-titulo">Estudiante de</a>
     <a class = "text-4xl text-purple-500 font-titulo ml-2">Ingenieria en Sistemas Computacionales</a>
     <a class = "text-4xl text-orange-500 font-titulo ml-2">de 6to semestre</a>
    </div>

    <div class = "mt-10 flex justify-center">
    <img 
    src="/images.jpeg" 
    alt="Foto de Erick Vladimir" 
    class="w-60 h-60 rounded-full object-cover">
    </div>


  </div>





</template>

<style scoped>
  /* No necesitamos CSS extra, DaisyUI y Tailwind
     hacen todo en el <template> */
</style>