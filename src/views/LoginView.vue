<template>
    <v-app class = "contenedor"> <!-- esto es como un div -->
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
   
  
        <!-- Body Container -->
        <v-main class="main">
  
          <!-- Cuadro de bloque -->  
          <v-card width="500" class = "mx-auto mt-9"> 
  
            <!-- titulo -->
            <v-card-title> Login </v-card-title> 
  
            <!-- bloque -->
            <v-card-text> 
              <v-text-field label = "Usuario" prepend-icon="mdi-account-circle"/> <!-- Input -->
              <v-text-field 
                label = "Clave" 
                :type="mostrarClave ? 'text' : 'password'" 
                prepend-icon  = "mdi-lock"
                :append-icon="mostrarClave ? 'mdi-eye' : 'mdi-eye-off'" 
                @click:append = "mostrarClave = !mostrarClave" />  <!-- Si es true, pasa a falso y viceversa -->
  
            </v-card-text>
  
  
            <v-divider> </v-divider>
            <v-card-action> 
              <v-btn color ="succes"> Regístrate</v-btn>
              <v-btn color ="info"> Inicia sesión </v-btn>
  
            </v-card-action>
  
          </v-card>  <!-- cerrando div card-->
  
        </v-main> <!-- cerrando div main-->
  
  
        <!-- inferior-->
        <v-footer
          class="bg-indigo-lighten-1 text-center d-flex flex-column"
        >
          <div>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              :icon="icon"
              variant="text"
            ></v-btn>
          </div>
  
          <div class="pt-0">
            Redes Sociales
          </div>
  
          <v-divider></v-divider>
  
          <div>
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </div>
        </v-footer>
        <!-- inferior-->
  
    </v-app>  <!-- cerrando div class-->
  </template>
  
  
  <script> // JavaScript
  export default{
    data() 
    {
      return{
        mostrarClave:false,
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
      } // return 
    } //data  
  }
  </script>
  
  <style scoped>
  .barraNav{
    z-index:0
  }
  .contenedor{
    display:flex !important
  }
  .main{
    margin-top:10%
  }
  </style>