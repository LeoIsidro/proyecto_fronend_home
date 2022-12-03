<template>
    <v-app class = "contenedor"> <!-- esto es como un div -->
      <!-- Encabezado -->

      <v-app-bar  color = "black" absolute = true class = "barraNav"> 
         <!-- logo - imagen -->
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logoCYM.jpg"
          width="70"
          height="70"
         />
        <v-toolbar-title> Chino y Menacho</v-toolbar-title>  <!-- titulo -->
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
          <h3 align="center">Chino y Menacho</h3>
          <span align="center"> Emprendimiento que organiza fiestas juveniles</span>
          <!--<a href="#" class="btn">shop now</a>-->

        </div>
      </section>

      <!-- Home section end-->


<section class="full-width formated-section">
  
</section>


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

<script> // JavaScript para la parte "CONTACTO"
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

/*
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

/* col-sm */
@media (min-width: 768px) and (max-width: 991px) {
    
  }
  
  /* col-md */
  @media (min-width: 992px) and (max-width: 1199px) {
      
  }
  
  /* col-lg */
  @media (min-width: 1200px) {
      
  }


.home{
  position: relative;
	width: 100%;
	height: calc(100vh - 50px);
	background-color: #F5F5F5;
	background-size: cover;
	background-position: center;
	transition: all .1s ease-out;
	background-image: url('assets/fiesta2.jpeg');
	animation: banner 28s infinite linear;
}

.home .content{
  margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	color: #FFF;
	background-color: rgba(255, 252, 247, 0.148);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

}

.home .content h3{
    font-size: 6rem;
    color: rgb(0, 0, 0);
}

.home .content span{
  text-decoration: none;
	color: rgb(255, 255, 255);
	padding: 9px 20px;
	text-transform: uppercase;
  transition: all .3s ease-in-out;
  border: 1px solid rgb(255, 255, 255);
}

/*
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
*/
.home .content p{
    font-size: 1.5rem;
    color:rgb(255, 255, 255);
    padding:1rem 0;
    line-height: 1.5;
}
</style>

