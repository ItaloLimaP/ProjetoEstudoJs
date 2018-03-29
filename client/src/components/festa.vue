<template>
  <md-layout md-gutter md-column>
    <h1>Pessoas/Eventos</h1>
    <form @submit.prevent="save">
      <md-input-container>
        <label>Id da pessoa</label>
        <md-input v-model="detalhe.nomepessoa"></md-input>
      </md-input-container>
      <md-button class="md-primary md-raised" type="submit">
        <md-icon>send</md-icon>
        Salvar
      </md-button>
      <md-button class="md-warn md-raised" @click.native="del">
        <md-icon>delete</md-icon>
        Excluir
      </md-button>
    </form>
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>ID Pessoa</md-table-head>
          <md-table-head>ID Evento</md-table-head>
          <md-table-head>Ação</md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row v-for="item in lista" :key="item.idpessoa">
          <md-table-cell>{{item.idpessoa}}</md-table-cell>
          <md-table-cell>{{item.idevento}}</md-table-cell>
          <md-table-cell>
            <md-button class="md-icon-button" @click.native="detalhe = item">
              <md-icon>edit</md-icon>
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table-body> 
    </md-table>
  </md-layout>
</template>
<script>
const api = require("./api").pessoas
module.exports = {
  name: "CadPessoas",
  created() {
    this.list()
  },
  data() {
    return {
      detalhe: {},
      lista: []
    }
  },
  methods: {
    list() {
      api.list().then(ret => {
        this.lista = ret.data
        this.detalhe = {nomepessoa:""}
      })
    }
  }
}
</script>