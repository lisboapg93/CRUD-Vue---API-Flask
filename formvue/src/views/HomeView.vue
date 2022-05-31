<template>
  <div class="home">
    <div class="header">
      <div class="content">
        <h2 class="title">Curriculos</h2>
      <p class="description">Lista de curriculos cadastrados</p>
      </div>
      
      <routerLink to="cadastro" class="bt-cadastro">Novo cadastro</routerLink>
    </div>
    <ul class="list">
      <li class="item" v-for="(item, index) in curriculos" :key="index">
        <p class="label">Nome: {{item.name}}</p>
        <p class="label">Email: {{item.email}}</p>
        <p class="label">Telefone: {{item.phone}}</p>
        <p class="label">Endereço: {{item.address}}</p>
        <p class="label">Profissão: {{item.job}}</p>
        <a class="label" download="curriculo.pdf" :href="`${item.file}`">Curriculo</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src

export default {
  name: 'HomeView',
  data(){
    return{
      curriculos: []
    }
  },
  mounted(){
    this.getCurriculos();
  },
  components: {
  },
  methods: {
    getCurriculos(){
      axios.get(`/users`)
      .then((response) => {
        this.curriculos = response.data.users
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="stylus">
   .home{
        display flex
        padding 32px 24px
        flex-direction column
        flex 1
        box-sizing border-box
    }

    .header{
      width 100%
      display flex
      position sticky
      top 0
      background #fff
      gap 32px
    }

    .header .content{
      display flex
      flex-direction column
      text-align left
    }

    .bt-cadastro{
      flex none
      height fit-content
      background #000
      color #fff
      margin 16px auto 0
      text-decoration none
      padding 16px 32px
      border-radius 8px
      box-sizing border-box
    }

    .home .title{
        font-size 32px
        margin 0
        padding 0
    }

    .home .description{
        margin 6px 0 0 0
        padding 0
    }

    .list{
      width 100%
      padding 0
      display flex
      flex-direction column
      gap 32px
    }

    .list li{
      list-style none
      width 100%
      text-align left
      padding 0 0 32px 0
      box-sizing border-box
      border-bottom 1px solid #dedede
    }

    .list li:last-child{
      border 0
    }
</style>