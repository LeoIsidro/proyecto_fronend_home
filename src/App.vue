<template>
  <v-app class="contenedor">
    <!-- esto es como un div -->
    <!-- Encabezado -->

    <v-app-bar color="black" absolute="true" class="barraNav">
      <!-- logo - imagen -->
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logoCYM.jpg"
        width="70"
        height="70"
      />
      <v-toolbar-title> Chino y Menacho</v-toolbar-title>
      <!-- titulo -->
      <v-spacer></v-spacer>
      <!-- equina derecha -->

      <!-- Botones de encabezado -->
      <v-btn text rounded><RouterLink to="/"> Inicio </RouterLink></v-btn>
      <!-- text = transparencia, rounded = sombreado redondeado-->
      <v-btn text rounded
        ><RouterLink to="/login"> Inicia Sesión </RouterLink>
      </v-btn>
      <v-btn text rounded
        ><RouterLink to="/register"> Regístrate </RouterLink>
      </v-btn>
    </v-app-bar>
    <RouterView></RouterView>

    <!-- inferior-->
    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
        ></v-btn>
      </div>

      <div class="pt-0">Redes Sociales</div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
    </v-footer>
    <!-- inferior-->
  </v-app>
  <!-- cerrando div class-->
</template>

<script>
// JavaScript para la parte "CONTACTO"
export default {
  data() {
    return {
      mostrarClave: false,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    }; // return
  }, //data
};
</script>

<style scope>
.barraNav {
  z-index: 0;
}
.contenedor {
  display: flex !important;
}
.main {
  margin-top: 10%;
}
.section {
  padding: 2rem 9%;
}
</style>
