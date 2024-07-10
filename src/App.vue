<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/chats">Chats</router-link>
    <router-link to="/contacts">Contacts</router-link>
    <router-link to="/login">Sign In</router-link>
  </nav>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baskervville+SC&family=Ysabeau:ital,wght@0,1..1000;1,1..1000&display=swap');

#app {
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #e8c6f5;
}

body {
  background-color: rgb(120, 189, 189);
}

.form {
  background-color: rgb(241, 240, 231);
  border-radius: 5%;
}

h1 {
    font-family: 'Ysabeau', fallback, sans-serif;
    font-size: xx-large;
    text-align: center;
}

button {
  background-color: rgb(204,188,175);
  border-radius: 2%;
  box-shadow: #111111;
}
</style>
