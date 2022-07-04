<template>
  <header>
    <router-link to="/">
<span class="adm">Painel ADM</span>
    </router-link>
  </header>
</template>

<style scoped>

header {
  position: absolute;
  width: 100%;
  height: 130px;
  left: 0;
  top: 0;

  background-image: linear-gradient(90deg, #222121 0, #49494b 35%, #747474 100%);
}
.adm {
  position: absolute;
  left: 40px;
  top: 35px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 59px;
  text-align: left;
  color: #ffffff;
}

</style>
