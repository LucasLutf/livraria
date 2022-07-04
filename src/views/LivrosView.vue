<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      novo_titulo: "",
      nova_categoria: "",
      nova_editora: "",
      novo_autor: "",
      livros: [],
    };
  },
  methods: {
    salvar() {
      if (this.novo_livro !== "") {
        const novo_id = uuidv4();
        this.livros.push({
          id: novo_id,
          novo_titulo: this.novo_titulo,
          categoria: this.nova_categoria,
          editora: this.nova_editora,
          autor: this.novo_autor,
        });
        this.novo_titulo = "";
        this.nova_categoria = "";
        this.nova_editora = "";
        this.novo_autor = "";
      }
    },
    excluir(livros) {
      const indice = this.livros.indexOf(livros);
      this.livros.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Livros</h2>
    </div>
    <div class="form-input">
      <input
        placeholder="Titulo"
        type="text"
        v-model="novo_titulo"
        @keydown.enter="salvar"
      />
      <input
        placeholder="Categoria"
        type="text"
        v-model="nova_categoria"
        @keydown.enter="salvar"
      />
      <input
        placeholder="Editora"
        type="text"
        v-model="nova_editora"
        @keydown.enter="salvar"
      />
      <input
        placeholder="Autor"
        type="text"
        v-model="novo_autor"
        @keydown.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-livros">
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Categoria</th>
            <th>Editora</th>
            <th>Autor</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.novo_titulo }}</td>
            <td>{{ livro.categoria }}</td>
            <td>{{ livro.editora }}</td>
            <td>{{ livro.autor }}</td>
            <td>
              <button class="editbtn">Editar</button
              ><button class="excluirbtn" @click="excluir(livro)">
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

<style>
.title {
  text-align: center;
  margin: 14% 0 0 0;
}

.form-input {
  display: flex;
  justify-content: center;
  margin: 4% 0 0 0;
}

.form-input input {
  width: 12%;
  padding: 0.5rem;
  border: 2px solid #000000;
  border-radius: 10px;
}

.form-input button {
  padding: 0.5rem;
  border: 2px solid #000000;
  border-radius: 10px;
  color: #000000;
  font-weight: bold;
  margin-left: 1%;
}
.form-input button:hover {
  background-image: linear-gradient(#2b2727, #2b2727);
  color: #ffffff;
}

.list-livros {
  display: flex;
  justify-content: center;
  margin: 2% 0 0 0;
}

table {
  width: 80%;
  border-collapse: collapse;
  margin: 0 auto;
  border: 1px solid #020202;
  font-size: 1.1rem;
  text-align: center;
}

table thead {
  background-color: #414144;
  color: #ffffff;
}

table thead th {
  font-weight: bolder;
}

table tbody tr:nth-child(odd) {
  background-color: #adadad;
}

.editbtn {
  padding: 0.5rem;
  border: 1px solid #000000;
  border-radius: 5px;
  color: #000000;
  font-weight: bold;
  margin-left: 1%;
}
.editbtn:hover {
  background-image: linear-gradient(#2b2727, #2b2727);
  color: #ffffff;
}

.excluirbtn {
  padding: 0.5rem;
  border: 1px solid #000000;
  border-radius: 5px;
  color: #000000;
  font-weight: bold;
  margin-left: 1%;
}

.excluirbtn:hover {
  background-image: linear-gradient(#2b2727, #2b2727);
  color: #ffffff;
}
</style>
