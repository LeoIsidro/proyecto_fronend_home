<script>
//import { RouterLink, RouterView } from "vue-router";
import router from "../router/index.js";
import { useUserStore } from "../stores/user";
export default {
  name: "RegisterView",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      name: "",
      lastname: "",
    };
  },
  methods: {
    onUsernameInput(e) {
      this.username = e.target.value;
    },
    onPasswordInput(e) {
      this.password = e.target.value;
    },
    onEmailInput(e) {
      this.email = e.target.value;
    },
    onNameInput(e) {
      this.name = e.target.value;
    },
    onLastnameInput(e) {
      this.lastname = e.target.value;
    },
    onRegister() {
      const userStore = useUserStore();
      userStore.register(
        this.username,
        this.password,
        this.email,
        this.name,
        this.lastname
      );
      router.push({ path: "/", query: { username: this.username } });
    },
  },
};
</script>

<template>
  <head>
    <meta charset="utf-8" />
    <title>Formulario Registro</title>
  </head>
  <body>
    <section class="form-register">
      <h5>Registrate</h5>
      <input
        type="text"
        class="controls"
        placeholder="Nombre"
        aria-label="nombre"
        aria-describedby="basic-addon2"
        :value="nombre"
        @input="onNameInput"
      />
      <input
        type="text"
        class="controls"
        placeholder="Apellido"
        aria-label="apellido"
        aria-describedby="basic-addon2"
        :value="apellidos"
        @input="onLastnameInput"
      />
      <input
        type="text"
        class="controls"
        placeholder="Contraseña"
        aria-label="password"
        aria-describedby="basic-addon2"
        :value="password"
        @input="onPasswordInput"
      />
      <input
        type="text"
        class="controls"
        placeholder="DNI"
        aria-label="documento"
        aria-describedby="basic-addon2"
        :value="documento"
        @input="onUsernameInput"
      />
      <input
        type="text"
        class="controls"
        placeholder="Correo electronico"
        aria-label="email"
        aria-describedby="basic-addon2"
        :value="email"
        @input="onEmailInput"
      />
      <button @click="onRegister" class="buttons" type="button">
        Registrarse
      </button>

      <p>
        <a><RouterLink to="/login">¿Ya tienes una cuenta?</RouterLink></a>
      </p>
    </section>
    <RouterView />
  </body>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    align-items: center;
  }
  input {
    line-height: 2em;
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

.form-register {
  width: 350px;
  height: 540px;
  background: #e3dddd;
  margin: auto;
  margin-top: 70px;
  margin-bottom: 70px;
  box-shadow: 7px 13px 37px rgb(0, 0, 0);
  padding: 20px 30px;
  border-top: 4px solid #017bab;
  color: rgb(252, 253, 255);
  background-image: url(../assets/fi.jpeg);
}

.form-register h5 {
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
  color: #e3dddd;
  font-size: 14px;
  font-weight: bold;
}

.buttons {
  width: 100%;
  height: 40px;
  background: #017bab;
  border: none;
  color: white;
  margin-bottom: 16px;
}

.form-register p {
  height: 40px;
  text-align: center;
  border-bottom: 1px solid;
}

.form-register a {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.form-register a:hover {
  text-decoration: underline;
}
</style>