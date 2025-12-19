<script setup>
import novar from './components/novar.vue'
import presentacion from './components/presentacion.vue'
import formacion from './components/formacion.vue'
import redes from './components/redes.vue'
import contacto from './components/contacto.vue'
import cv from './components/cv.vue'
import hobbies from './components/hobbies.vue'
import cripto from './components/cripto.vue'
import llave from './components/llave.vue'


import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('animate-fade-in-visible')
        entry.target.classList.remove('opacity-0','translate-y-10')
      }
    })
  }, { threshold: 0.1 })

  // Seleccionamos todas las secciones
  const elements = document.querySelectorAll('section')
  elements.forEach(el => observer.observe(el))
})
</script>

<template>
  <div>
    <!-- Navbar siempre visible, opcional animación -->
    <novar class="sticky top-0 z-50 bg-base-100/70 backdrop-blur-sm" />

    <!-- Secciones -->
    <section id="presentacion" class="min-h-screen flex justify-center mt-20 lg:mt-32 scroll-mt-6 opacity-0 translate-y-10">
      <presentacion/>
    </section>

    <section id="formacion" class="min-h-screen flex justify-center mt-20 lg:mt-32 scroll-mt-6 opacity-0 translate-y-10">
      <formacion/>
    </section>

    <section id="contacto" class="min-h-screen flex justify-center mt-20 lg:mt-32 scroll-mt-6 opacity-0 translate-y-10">
      <contacto/>
    </section>

    <section id="redes" class="min-h-screen flex justify-center mt-20 lg:mt-32 scroll-mt-6 opacity-0 translate-y-10">
      <redes/>
    </section>

    <section id="cv" class="min-h-screen flex justify-center mt-20 lg:mt-32 scroll-mt-6 opacity-0 translate-y-10">
      <cv/>
    </section>

     <section id="llave" class="min-h-screen flex justify-center mt-20 lg:mt-32 scroll-mt-6 opacity-0 translate-y-10">
      <llave/>
    </section>

    <section id="hobbies" class="min-h-screen flex justify-center mt-20 lg:mt-32 scroll-mt-6 opacity-0 translate-y-10">
      <hobbies/>
    </section>

    <section id="cripto" class="min-h-screen flex justify-center mt-20 lg:mt-32 scroll-mt-6 opacity-0 translate-y-10">
      <cripto/>
    </section>
  </div>
</template>

<style scoped>
/* Animación fade-in */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-visible {
  animation: fade-in 0.8s ease-out forwards;
}

/* Clases iniciales para las secciones */
.opacity-0 {
  opacity: 0;
}
.translate-y-10 {
  transform: translateY(20px);
}
</style>
