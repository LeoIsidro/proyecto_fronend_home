<script>
export default {
  name: "HomeView",

};
</script>

<template>
      <!-- Home section start-->
      <section class="home" id="home">
        <div class="content">
          <h3 align="center">Chino y Menacho</h3>
          <span align="center"> Emprendimiento que organiza fiestas juveniles</span>
          <!--<a href="#" class="btn">shop now</a>-->

        </div>
      </section>

      <!-- Home section end-->

<!-- Testimonial section-->
      <div class="py-5 bg-light">
                <div class="container-s px-5 my-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-10 col-xl-7">
                            <div class="text-center">
                                <div class="fs-4 mb-4 fst-italic">" Somos un emprendimiento de dos jóvenes quienes organizan fiestas juveniles que
estén dispuestos a pasar una noche genial. Chino y Menacho existe desde 2017 y cada año mejoramos la calidad de nuestros eventos. Hoy en día, contamos con mucho más clientes y estamos dispuestos a seguir mejorando"</div>
                                <div class="d-flex align-items-center justify-content-center">
                                    <img class="rounded-circle me-3" src="https://scontent.flim28-1.fna.fbcdn.net/v/t39.30808-6/277572233_353768896770375_1288055192185371976_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DBkodNetyIQAX8cV0Eu&_nc_ht=scontent.flim28-1.fna&oh=00_AfDbUZ-LpJlQS5nXkq9Q4TRhTOdsJ4jSDaUsr5iRKwVzRw&oe=638F5455" width= "40" height="40" alt="..." />
                                    <div class="fw-bold">
                                        Kevin, Menacho
                                        <span class="fw-bold text-primary mx-1">/</span>
                                        CEO, CYM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Blog preview section-->
            <section class="py-5">
                <div class="container-sm px-5 my-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-8 col-xl-6">
                            <div class="text-center">
                                <h2 class="fw-bolder">Nuestros eventos</h2>
                                <p class="lead fw-normal text-muted mb-5">Estos son los eventos que realizaremos actualmente, únete a la diversión!</p>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5">
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src="https://www.malavitanightbar.com/wp-content/uploads/2022/02/fiesta-universitaria.jpg" alt="..." />
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2"><RouterLink to="/compra1"> Compra tu entrada</RouterLink></div>
                                    <h4 class="card-title mb-3">Fin de ciclo universitario</h4>
                                    <p class="card-text mb-0">¿Quieres relajarte después de tanto estrés? Compra tu entrada y celebra junto a tus amigos el cierre de ciclo universitario.</p>
                                </div>
                                <RouterView></RouterView>
                                <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div class="d-flex align-items-end justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle me-3" src="https://scontent.flim28-1.fna.fbcdn.net/v/t39.30808-6/277572233_353768896770375_1288055192185371976_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DBkodNetyIQAX8cV0Eu&_nc_ht=scontent.flim28-1.fna&oh=00_AfDbUZ-LpJlQS5nXkq9Q4TRhTOdsJ4jSDaUsr5iRKwVzRw&oe=638F5455" width="40" height="40" alt="..." />
                                            <div class="small">
                                                <div class="fw-bold">Kevin y Menacho</div>
                                                <div class="text-muted">Diciembre 03, 2022 &middot; 9:00pm - 03:00am </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/EXXFRRAHCFBQXE37OZNWNI3IJA.jpg" alt="..." />
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2"><RouterLink to="/compra2"> Compra tu entrada</RouterLink></div>
                                    <h4 class="card-title mb-3">Año nuevo 2023</h4>
                                    <p class="card-text mb-0">Compra tu entrada para la gran fiesta por fin de año, cierralo con broche de oro.</p>
                                </div>
                                <RouterView></RouterView>
                                <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div class="d-flex align-items-end justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle me-3" src="https://scontent.flim28-1.fna.fbcdn.net/v/t39.30808-6/277572233_353768896770375_1288055192185371976_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DBkodNetyIQAX8cV0Eu&_nc_ht=scontent.flim28-1.fna&oh=00_AfDbUZ-LpJlQS5nXkq9Q4TRhTOdsJ4jSDaUsr5iRKwVzRw&oe=638F5455" width="40" height="40" alt="..." />
                                            <div class="small">
                                                <div class="fw-bold">Kevin y Menacho</div>
                                                <div class="text-muted">Diciembre 31, 2022 &middot; 10:00pm - 06:00am</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src="https://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2015/02/dia_de_san_valentin.jpg" alt="..." />
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2"><RouterLink to="/compra3"> Compra tu entrada</RouterLink></div>
                                    <h4 class="card-title mb-3">San Valentín</h4>
                                    <p class="card-text mb-0">No te olvides del 14 de febrero, diviertete junto a tu pareja y/o amistades.</p>
                                </div>
                                <RouterView></RouterView>
                                <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div class="d-flex align-items-end justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle me-3" src="https://scontent.flim28-1.fna.fbcdn.net/v/t39.30808-6/277572233_353768896770375_1288055192185371976_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DBkodNetyIQAX8cV0Eu&_nc_ht=scontent.flim28-1.fna&oh=00_AfDbUZ-LpJlQS5nXkq9Q4TRhTOdsJ4jSDaUsr5iRKwVzRw&oe=638F5455" width="40" height="40" alt="..." />
                                            <div class="small">
                                                <div class="fw-bold">Kevin y Menacho</div>
                                                <div class="text-muted">Febrero 14, 2023 &middot; 7:00pm - 11:00pm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
            </section>
</template>


<style scoped>

.mb-3 {
  margin-bottom: 1rem !important;
}

.small {
  font-size: 0.875em;
}
.justify-content-between {
  justify-content: space-between !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.bg-transparent {
  --bs-bg-opacity: 1;
  background-color: transparent !important;
}
.pt-0 {
  padding-top: 0 !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.p-4 {
  padding: 1.5rem !important;
}
.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}

.link-dark {
  color: #212529;
}
.link-dark:hover, .link-dark:focus {
  color: #1a1e21;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.bg-gradient {
  background-image: var(--bs-gradient) !important;
}

.bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgb(244, 248, 114) !important;
}

.badge {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: rgb(255, 255, 255);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}
.border {
  border: 1px solid #dee2e6 !important;
}

.border-0 {
  border: 0 !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}
.h-100 {
  height: 100% !important;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}

.card-title {
  margin-bottom: 0.5rem;
}

.card-subtitle {
  margin-top: -0.25rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link + .card-link {
  margin-left: 1rem;
}

.card-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-footer {
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
  margin-left: -0.5rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  border-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.card-group > .card {
  margin-bottom: 0.75rem;
}
@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-top,
.card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-bottom,
.card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-top,
.card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-bottom,
.card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}
.col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
.mb-5 {
  margin-bottom: 3rem !important;
}

.text-muted {
  --bs-text-opacity: 1;
  color: #6c757d !important;
}

.fw-normal {
  font-weight: 400 !important;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.fw-bolder {
  font-weight: bolder !important;
}

.col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }


.col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }


.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.container,
.container-sm,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-s,

.container-s {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}
.container-sm {
  width: 40%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .text-center {
  text-align: center !important;
}

.fs-4 {
    font-size: 1.5rem !important;
  }

.d-flex {
  display: flex !important;
}
.rounded-circle {
  border-radius: 50% !important;
}

.fw-bold {
  font-weight: 700 !important;
}
.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}

.my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.justify-content-center {
  justify-content: center !important;
}

.bg-light {
  --bs-bg-opacity:3;
  background-color:  #e9eff4e7 !important;
}

.gx-5 {
  --bs-gutter-x: 3rem;
}

.col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.fst-italic {
  font-style: italic !important;
}

.align-items-center {
  align-items: center !important;
}

.me-3 {
  margin-right: 1rem !important;
}

.text-primary {
  --bs-text-opacity: 3;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}

.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}

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
*/


.home{
  position: relative;
	width: 100%;
	height: calc(100vh - 50px);
	background-color: #F5F5F5;
	background-size: cover;
	background-position: center;
	transition: all .1s ease-out;
	background-image: url('../assets/fiesta2.jpeg');
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
    color: rgb(255, 254, 254);
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
