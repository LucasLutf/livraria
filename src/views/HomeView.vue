<template>
  <main>
    <h3>Bem vindo a área de Administração</h3>
    <div class="txtabert">
      <p>Sistema desenvolvido por Brunno Duarte e Lucas Lutf</p>
    </div>
  </main>
  <div class="livro">
    <router-link to="/livros">
      <button>Livro</button>
    </router-link>
  </div>
  <div class="editora">
    <router-link to="/editoras">
      <button>Editora</button>
    </router-link>
  </div>
  <div class="usuario">
    <router-link to="/usuarios">
      <button>Usuario</button>
    </router-link>
  </div>
</template>
<style scoped>
main {
  position: absolute;
  justify-content: center;
  width: 684px;
  height: 526px;
  margin: 12% 0 0 16%;
  text-align: center;

  background-image: linear-gradient(90deg, #3f3d3d 0, #626263 35%, #8a8888 100%);
  border-radius: 10px;
}

h3 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 59px;
  text-align: center;
}
.txtabert {
  font-family: "Montserrat";
  text-align: center;
  text-decoration: none;
  list-style-type: none;

  color: #000000;
}
.livro button {
  position: absolute;
  width: 350px;
  height: 59px;
  margin: 22% 0 0 25%;
  text-align: center;
  border-radius: 10px;
  color: #000000;
  cursor: pointer;
  background-color: #ffffff;
}
.livro button:hover {
  background-image: linear-gradient(#2b2727, #2b2727);
  color: #ffffff;
  
}
.editora button {
  position: absolute;
  width: 350px;
  height: 59px;
  margin: 26% 0 0 25%;
  text-align: center;
  border-radius: 10px;
  color: #000000;
  cursor: pointer;
  background-color: #ffffff;
}
.editora button:hover {
  background-image: linear-gradient(#2b2727, #2b2727);
  color: #ffffff;
  
}
.usuario button {
  position: absolute;
  width: 350px;
  height: 59px;
  margin: 30% 0 0 25%;
  text-align: center;
  border-radius: 10px;
  color: #000000;
  cursor: pointer;
  background-color: #ffffff;
}
.usuario button:hover {
  background-image: linear-gradient(#2b2727, #2b2727);
  color: #ffffff;
  
}
.txtabert button {
  position: absolute;
  width: 350px;
  height: 59px;
  left: 161px;
  top: 423px;
  font-family: "Montserrat";
  text-align: center;
  border-radius: 10px;
  background-color: #272424;
  color: #ffffff;
  cursor: pointer;
}
</style>