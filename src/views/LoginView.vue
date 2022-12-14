<template>
  <v-app class="contenedor">
    <!-- esto es como un div -->

    <!-- Body Container -->
    <v-main class="main">
      <!-- Cuadro de bloque -->
      <v-card width="500" class="mx-auto mt-9">
        <!-- titulo -->
        <v-card-title> Login </v-card-title>

        <!-- bloque -->
        <v-card-text>
          <v-text-field
            label="Usuario"
            prepend-icon="mdi-account-circle"
            v-bind:value="username"
            v-on:input="OnUsername"
            name="username"
            id="username"
          />
          <!-- Input -->
          <v-text-field
            label="Clave"
            :type="mostrarClave ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="mostrarClave ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="mostrarClave = !mostrarClave"
            v-bind:value="password"
            v-on:input="OnPassword"
            name="password"
            id="password"
          />
          <!-- Si es true, pasa a falso y viceversa -->
        </v-card-text>

        <v-divider> </v-divider>
        <v-card-action>
          <v-btn color="succes">
            <RouterLink to="/register">Regístrate</RouterLink></v-btn
          >
          <v-btn color="info" v-on:click="OnLogin"> Inicia sesión </v-btn>
        </v-card-action>
        <div align="center" v-if="success && loggin" id="success">Success!</div>
        <div align="center" v-if="!success && loggin" id="fail">
          Incorrect username or password
        </div>
        <meta
          v-if="success && loggin"
          id="success"
          http-equiv="refresh"
          content="0;
          url='http://127.0.0.1:5173/'"
        />
      </v-card>
      <!-- cerrando div card-->
    </v-main>
    <!-- cerrando div main-->
  </v-app>
  <!-- cerrando div class-->
</template>

<script>
// JavaScript
export default {
  data() {
    return {
      username: "",
      password: "",
      success: false,
      loggin: false,
      mostrarClave: false,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    }; // return
  }, //data
  methods: {
    OnUsername(e) {
      this.loggin = false;
      this.username = e.target.value;
    },
    OnPassword(e) {
      this.loggin = false;
      this.password = e.target.value;
    },
    OnLogin() {
      const url = "http://localhost:5000/login/async";

      const body = {
        username: this.username,
        password: this.password,
      };

      fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.loggin = true;
          this.success = true;
          if (data.success) {
            sessionStorage.setItem("user", this.username);
            this.$emit("user-login");
          }
        });
    }
  } // methods
}
</script>

<style scoped>
.barraNav {
  z-index: 0;
}
.contenedor {
  display: flex !important;
}
.main {
  margin-top: 10%;
}
</style>
