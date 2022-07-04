<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        { id: "4dfadc62-3011-48a9-a384-53cbc062b0b2", nome: "Livro 1" },
        { id: "6fe0c8e2-619b-4c46-b92b-e1ca7a3b970c", nome: "Livro 2" },
        { id: "9e3a44e1-bceb-4786-a1fd-38c5a76a7745", nome: "Livro 3" },
      ],
      novo_livro: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_livro !== "") {
        const novo_id = uuidv4();
        this.livros.push({
          id: novo_id,
          nome: this.novo_livro,
        });
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
      <input type="text" v-model="novo_livro" @keydown.enter="salvar" />
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
          <tr v-for="livros in livros" :key="livros.id">
            <td>{{ livros.id }}</td>
            <td>{{ livros.nome }}</td>
            <td>
              <button class="editbtn">Editar</button
              ><button class="excluirbtn" @click="excluir(livros)">Excluir</button>
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
  width: 50%;
  padding: 0.5rem;
  border: 2px solid #0c0c0c;
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
