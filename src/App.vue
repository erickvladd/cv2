<script setup>
  // 1. Importas tu nuevo componente
  import Navbar from './components/novar.vue'
  import presentacion from './components/presentacion.vue'
  import formacion from './components/formacion.vue'
  import redes from './components/redes.vue'
  import contacto from './components/contacto.vue'
  import cv from './components/cv.vue'
  import hobbies from './components/hobbies.vue'
  import cripto from './components/cripto.vue'
</script>

<template>

  <div>


    <Navbar />


  
    <section id="presentacion" class="h-screen flex justify-center mt-20 lg:mt-32"> <presentacion/> 
    </section>

   <section id="formacion" class="h-screen flex justify-center mt-20 lg:mt-32"> <formacion/> 
    </section>

    <section id="contacto" class="h-screen flex justify-center mt-20 lg:mt-32"> <contacto/> 
    </section>

    <section id="redes" class="h-screen flex justify-center mt-20 lg:mt-32"> <redes/> 
    </section>

    <section id="cv" class="h-screen flex justify-center mt-20 lg:mt-32"> <cv/> 
    </section>

    <section id="hobbies" class="flex justify-center mt-20 lg:mt-32"> <hobbies/> 
    </section>

    <section id="cripto" class="h-screen flex justify-center mt-20 lg:mt-32"> <cripto/> 
    </section>




  </div>

</template>

<style scoped>
  /* Estilos para App.vue */
</style>