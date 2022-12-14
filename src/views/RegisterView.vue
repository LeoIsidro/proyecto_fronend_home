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
        placeholder="DNI"
        aria-label="documento"
        aria-describedby="basic-addon2"
        v-bind:value="username"
        v-on:input="onUsernameInput"
      />
      <input
        type="text"
        class="controls"
        placeholder="Nombre"
        aria-label="nombre"
        aria-describedby="basic-addon2"
        v-bind:value="name"
        v-on:input="onNameInput"
      />
      <input
        type="text"
        class="controls"
        placeholder="Apellido"
        aria-label="apellido"
        aria-describedby="basic-addon2"
        v-bind:value="lastname"
        v-on:input="onLastnameInput"
      />
      <input
        type="text"
        class="controls"
        placeholder="Telefono"
        aria-label="telefono"
        aria-describedby="basic-addon2"
        v-bind:value="phone"
        v-on:input="onPhoneInput"
      />
      <input
        type="text"
        class="controls"
        placeholder="Correo electronico"
        aria-label="email"
        aria-describedby="basic-addon2"
        v-bind:value="email"
        v-on:input="onEmailInput"
      />
      <input
        type="text"
        class="controls"
        placeholder="Contraseña"
        aria-label="password"
        aria-describedby="basic-addon2"
        v-bind:value="password"
        v-on:input="onPasswordInput"
      />
      <button v-on:click="onRegister" class="buttons" type="button">
        Registrarse
      </button>
      <meta
        v-if="register && success"
        id="success"
        http-equiv="refresh"
        content="0;
          url='http://127.0.0.1:5173/login'"
      />
      <p>
        <a><RouterLink to="/login">¿Ya tienes una cuenta?</RouterLink></a>
      </p>
    </section>
  </body>
</template>
<script>
//import { RouterLink, RouterView } from "vue-router";
export default {
  name: "RegisterView",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      name: "",
      lastname: "",
      phone: "",
      register: false,
      success: false,
    };
  },
  methods: {
    onUsernameInput(e) {
      this.register = false;
      this.username = e.target.value;
    },
    onPasswordInput(e) {
      this.register = false;
      this.password = e.target.value;
    },
    onEmailInput(e) {
      this.register = false;
      this.email = e.target.value;
    },
    onNameInput(e) {
      this.register = false;
      this.name = e.target.value;
    },
    onLastnameInput(e) {
      this.register = false;
      this.lastname = e.target.value;
    },
    onPhoneInput(e) {
      this.register = false;
      this.phone = e.target.value;
    },
    onRegister() {
      const url = "http://localhost:5000/register/async";

      const body = {
        username: this.username,
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        phone: this.phone,
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
          this.register = true;
          this.success = true;
        });
    }
  },
};
</script>
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
  height: 600px;
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
