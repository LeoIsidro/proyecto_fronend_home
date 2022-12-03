<script>
//import CountryComponent from "../components/CountryComponent.vue";

export default {
  name: "CompraView",
  components: {
    //  CountryComponent,
  },
  data() {
    return {
      productos: [],
      total: 0,
      evento: "Fiesta de Año Nuevo",
    };
  },
  
  methods: {
    onAddProduct(producto) {
      this.productos.push(producto);
    },
    onRemoveProduct(producto) {
      this.productos = this.productos.filter((p) => p !== producto);
    },
    onTotal(total) {
      this.total = total;
    },
    onContinue(){
      this.$router.push({ path: "/pago", query: { total: this.total } });
    },
    onBack(){
      this.$router.push({ path: "/productos", query: { total: this.total } });
    }
  },
};
</script>

<template>
  <head>
    <meta charset="utf-8" />
    <title>Formulario Login</title>
  </head>
  <body>
    <section class="form-compra">
      <h1>Evento: {{ evento }}</h1>
      <h2>Entrada</h2>
      <p>
        Recuerde que los eventos Chino y Menacho solo vende una entrada por
        Participante. A continuación se le redireccionará a la página de
        pago para que pueda adquirir su entrada.
      </p>
      <div>
        <a><RouterLink to="/"><button class="button_1" type="button">Regresar</button></RouterLink></a>

        <a><RouterLink to="/pago"><button class="button_2" type="button">Continuar</button></RouterLink></a>
      </div>
    </section>
  </body>
</template>

<style scoped>
@media (min-width: 1024px) {
  .countries {
    display: flex;
    align-items: center;
  }

  input {
    line-height: 2em;
  }

  .countries-container {
    text-align: center;
    overflow-y: auto;
    vertical-align: middle;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    padding: 10px;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: arial;
}

.form-compra {
  width: 400px;
  height: 350px;
  background: #4e4d4d;
  margin: auto;
  margin-top: 50px;
  box-shadow: 7px 13px 37px #000;
  padding: 20px 30px;
  border-top: 4px solid #017bab;
  color: white;
}

.form-compra h1 {
  margin: 0;
  text-align: center;
  height: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid;
  font-size: 20px;
}

.controls {
  width: 100%;
  border: 1px solid #017bab;
  margin-bottom: 15px;
  padding: 11px 10px;
  background: #252323;
  font-size: 14px;
  font-weight: bold;
}

.button_1 {
  width: 30%;
  height: 40px;
  background: #017bab;
  border: 15px;
  color: white;
  margin-bottom: 40px;
  margin-top: 40px;
  margin-right: 20px;
}

.button_2 {
  width: 30%;
  height: 40px;
  background: #017bab;
  border: 15px;
  color: white;
  margin-bottom: 40px;
  margin-top: 40px;
}

.form-compra a {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.form-compra a:hover {
  text-decoration: underline;
}
</style>