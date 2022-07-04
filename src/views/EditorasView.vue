<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      editoras: [
        { id: "4dfadc62-3011-48a9-a384-53cbc062b0b2", nome: "Editora 1" },
        { id: "6fe0c8e2-619b-4c46-b92b-e1ca7a3b970c", nome: "Editora 2" },
        { id: "9e3a44e1-bceb-4786-a1fd-38c5a76a7745", nome: "Editora 3" },
      ],
      nova_editora: "",
    };
  },
  methods: {
    salvar() {
      const novo_id = uuidv4();
      this.editoras.push({
        id: novo_id,
        nome: this.nova_editora,
        editoras: this.nova_editora,
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Editoras</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="nova_editora" />
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
          <tr v-for="editoras in editoras" :key="editoras.id">
            <td>{{ editoras.id }}</td>
            <td>{{ editoras.nome }}</td>
            <td>???</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <RouterView />
</template>
