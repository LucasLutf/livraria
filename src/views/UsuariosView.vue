<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      novo_id: "",
      novo_username: "",
      novo_email: "",
      novo_nome: "",
      nova_senha: "",
      usuarios: [],
    };
  },
  methods: {
    salvar() {
      if (this.novo_usuario !== "") {
        const novo_id = uuidv4();
        this.usuarios.push({
          id: novo_id,
          novo_id: this.novo_id,
          username: this.novo_username,
          email: this.novo_email,
          nome: this.novo_nome,
          senha: this.nova_senha,
        });
        this.novo_id = "";
        this.novo_username = "";
        this.novo_email = "";
        this.novo_nome = "";
        this.nova_senha = "";
      }
    },
    excluir(usuarios) {
      const indice = this.usuarios.indexOf(usuarios);
      this.usuarios.splice(indice, 1);
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
      <input
        placeholder="Id"
        type="text"
        v-model="novo_id"
        @keydown.enter="salvar"
      />
      <input
        placeholder="Username"
        type="text"
        v-model="novo_username"
        @keydown.enter="salvar"
      />
      <input
        placeholder="Email"
        type="text"
        v-model="novo_email"
        @keydown.enter="salvar"
      />
      <input
        placeholder="Nome"
        type="text"
        v-model="novo_nome"
        @keydown.enter="salvar"
      />
      <input
        placeholder="Senha"
        type="text"
        v-model="nova_senha"
        @keydown.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-livros">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Nome</th>
            <th>Senha</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.novo_id }}</td>
            <td>{{ usuario.username }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.nome }}</td>
            <td>{{ usuario.senha }}</td>
            <td>
              <button class="editbtn">Editar</button
              ><button class="excluirbtn" @click="excluir(usuario)">
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
