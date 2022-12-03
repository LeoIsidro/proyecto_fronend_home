<template>
    <v-app class = "contenedor"> <!-- esto es como un div -->
  
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
              <v-btn color ="succes"> <RouterLink to="/register">Regístrate</RouterLink></v-btn>
              <v-btn color ="info"> Inicia sesión </v-btn>
            <RouterView> </RouterView>
            </v-card-action>
  
          </v-card>  <!-- cerrando div card-->
  
        </v-main> <!-- cerrando div main-->
  

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