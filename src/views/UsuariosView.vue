<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      usuarios: [
        { id: "4dfadc62-3011-48a9-a384-53cbc062b0b2", nome: "Usuario 1" },
        { id: "6fe0c8e2-619b-4c46-b92b-e1ca7a3b970c", nome: "Usuario 2" },
        { id: "9e3a44e1-bceb-4786-a1fd-38c5a76a7745", nome: "Usuario 3" },
      ],
      novo_usuario: "",
    };
  },
  methods: {
    salvar() {
      const novo_id = uuidv4();
      this.usuarios.push({
        id: novo_id,
        nome: this.novo_usuario,
        editoras: this.novo_usuario,
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Usuarios</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="novo_usuario" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-livros">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuarios in usuarios" :key="usuarios.id">
            <td>{{ usuarios.id }}</td>
            <td>{{ usuarios.nome }}</td>
            <td>???</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <RouterView />
</template>
