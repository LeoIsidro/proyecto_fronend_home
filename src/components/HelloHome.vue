<script>
export default {
  name: "HelloHome",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>  
  <v-content>
    <!-- Encabezado -->
    <v-app-bar  color = "purple" absolute = true class = "barraNav"> 
      
      <v-toolbar-title> CyM Login</v-toolbar-title>  <!-- titulo -->
      <v-spacer></v-spacer> <!-- ezquina derecha -->

      <!-- Botones de encabezado -->
      <v-btn text rounded> Inicio </v-btn> <!-- text = transparencia, rounded = sombreado redondeado-->
      <v-btn text rounded> Mis compras </v-btn>
      <v-btn text rounded> Inicia Sesión </v-btn>
      <v-btn text rounded> Regístrate</v-btn>

    </v-app-bar>

  </v-content> <!-- Contenedor -->


</template>
