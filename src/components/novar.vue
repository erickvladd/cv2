<script setup>
</script>

<template>
  <!-- NAVBAR RESPONSIVE -->
  <div class="navbar sticky top-0 z-50 bg-base-100/70 backdrop-blur-md shadow-md">
    
    <!-- Sección izquierda -->
    <div class="flex-1">
      <a href="#presentacion" class="btn btn-ghost text-lg">Inicio</a>
    </div>

    <!-- Sección derecha -->
    <div class="flex-none">
      <!-- Menú horizontal (solo visible en pantallas medianas o grandes) -->
      <ul class="menu menu-horizontal px-1 hidden md:flex">
        <li><a href="#formacion">Formación</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#redes">Redes</a></li>
        <li><a href="#cv">CV</a></li>
        <li><a href="#llave">Llave</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#cripto">Criptografía</a></li>
      </ul>

      <!-- Menú hamburguesa (solo visible en móvil) -->
      <div class="dropdown dropdown-end md:hidden">
        <div tabindex="0" role="button" class="btn btn-ghost">
          <!-- Icono de tres rayas -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <!-- Menú desplegable al tocar el icono -->
        <ul tabindex="0"
            class="menu menu-lg dropdown-content mt-3 p-2 shadow bg-black backdrop-blur-md rounded-box w-52 text-white">
          <li><a href="#formacion">Formación</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="#redes">Redes</a></li>
          <li><a href="#cv">CV</a></li>
          <li><a href="#llave">Llave</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#cripto">Criptografía</a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Opcional: mejora la transición del menú */
.dropdown-content {
  transition: all 0.2s ease-in-out;
}
</style>
