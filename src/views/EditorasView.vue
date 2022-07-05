<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      novo_id: "",
      novo_nome: "",
      novo_email: "",
      novo_site: "",
      novo_telefone: "",
      editoras: [],
    };
  },
  methods: {
    salvar() {
      if (this.nova_editora !== "") {
        const novo_id = uuidv4();
        this.editoras.push({
          id: novo_id,
          novo_id: this.novo_id,
          nome: this.novo_nome,
          email: this.novo_email,
          site: this.novo_site,
          telefone: this.novo_telefone,
        });
        this.novo_id = "";
        this.novo_nome = "";
        this.novo_email = "";
        this.novo_site = "";
        this.novo_telefone = "";
      }
    },
    excluir(editoras) {
      const indice = this.editoras.indexOf(editoras);
      this.editoras.splice(indice, 1);
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
      <input
        placeholder="Id"
        type="text"
        v-model="novo_id"
        @keydown.enter="salvar"
      />
      <input
        placeholder="Nome"
        type="text"
        v-model="novo_nome"
        @keydown.enter="salvar"
      />
      <input
        placeholder="Email"
        type="text"
        v-model="novo_email"
        @keydown.enter="salvar"
      />
      <input
        placeholder="Site"
        type="text"
        v-model="novo_site"
        @keydown.enter="salvar"
      />
      <input
        placeholder="Telefone"
        type="text"
        v-model="novo_telefone"
        @keydown.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-livros">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Site</th>
            <th>Telefone</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="editora in editoras" :key="editora.id">
            <td>{{ editora.novo_id }}</td>
            <td>{{ editora.nome }}</td>
            <td>{{ editora.email }}</td>
            <td>{{ editora.site }}</td>
            <td>{{ editora.telefone }}</td>
            <td>
              <button class="editbtn">Editar</button
              ><button class="excluirbtn" @click="excluir(editora)">
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <RouterView />
</template>
