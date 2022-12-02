<template>
  <v-app class = "contenedor"> <!-- esto es como un div -->
      <!-- Encabezado -->
      <v-app-bar  color = "black" absolute = true class = "barraNav"> 

        <v-toolbar-title> CyM Login</v-toolbar-title>  <!-- titulo -->
        <v-spacer></v-spacer> <!-- ezquina derecha -->

        <!-- Botones de encabezado -->
        <v-btn text rounded> Inicio </v-btn> <!-- text = transparencia, rounded = sombreado redondeado-->
        <v-btn text rounded> Mis compras </v-btn>
        <v-btn text rounded> Inicia Sesión </v-btn>
        <v-btn text rounded> Regístrate</v-btn>

      </v-app-bar>
 




      <!-- Home section start-->
      <section class="home" id="home">
        <div class="content">
          <h3 align="center">CyM</h3>

          <span align="center"> ¡Fiestas juveníles!</span>

          <p align="center"> Lorem iaspoesinfeipsnefsnefisnfsef evwfvse ve gev
            veve vevs bre ge  rgeerrerrbrer erbrre.
          </p>

          <a href="#" class="btn">shop now</a>

        </div>
      </section>

      <!-- Home section end-->


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
.section{
  padding:2rem 9%;
}
.home{
    display: flex;
    align-items: center;
    min-height: 100vh;
    background:url(assets/banner_fiesta3.jpg) no-repeat;
    background-size: cover;
    background-position: center;
}

.home .content{
  text-decoration: none;
	color: #FFF;
	padding: 9px 20px;
	border: 1px solid #FFF;
	text-transform: uppercase;
	transition: all .3s ease-in-out;

    align-items: center;
    max-width: 50rem;
}

.home .content h3{
    font-size: 6rem;
    color:rgb(255, 255, 255);
}

.home .content span{
    font-size: 3.5rem;
    color:rgb(255, 255, 255);;
    padding:1rem 0;
    line-height: 1.5;
}

.home .content p{
    font-size: 1.5rem;
    color:rgb(255, 255, 255);
    padding:1rem 0;
    line-height: 1.5;
}
</style>