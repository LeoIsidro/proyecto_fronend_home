<script>
import HelloHome from "../components/HelloHome.vue"; // Cargando el archivo Home

export default {
  name: "HomeView",
  // Creando componente
  components: {
    HelloHome,
  },
};
</script>

<template>
  <main>
    <HelloHome /> <!-- Llamando al componente Home -->
  </main>
</template>
