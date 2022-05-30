<template>
  <div class="cadastro">
    <h2 class="tile">Cadastro</h2>
    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, labore?</p>
    <routerLink to="/" class="bt-lista">Listagem</routerLink>
    <form class="form" ref="form">
      <input type="text" v-model="novo.name" placeholder="Nome completo" name="name" id="">
      <input type="email" v-model="novo.email" placeholder="Email" name="email" id="">
      <input type="phone" v-model="novo.phone" placeholder="Telefone" name="phone" id="">
      <input type="text" v-model="novo.address" placeholder="Endereço" name="address" id="">
      <input type="text" v-model="novo.job" placeholder="Profissão" name="job" id="">
      <input type="file" ref="file" @change="onChangeFileUpload" placeholder="Curriculo" name="doc" id="">
      <input class="bt-enviar" type="submit" value="Enviar" @click.prevent="enviar">
    </form>

    <transition>
        <div class="alert" v-if="showAlert">
            <p class="text">Cadastro realizado com sucesso</p>
        </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export default {
  name: 'HomeView',
  data(){
    return{
        showAlert: false,
      novo: {
        name: '',
        email: '',
        phone: '',
        address: '',
        job: '',
        file: ''
      },
      curriculos: []
    }
  },
  mounted(){
    this.getCurriculos();
  },
  components: {
  },
  methods: {
    toBase64(file){
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => reader.result;
      reader.onerror = error => error;
      
      return reader
    },
    async onChangeFileUpload() {
      // console.log(await toBase64(this.$refs.file.files[0]));
      this.novo.file = await toBase64(this.$refs.file.files[0])
      // console.log(this.novo.file)
      // this.novo.file = this.$refs.file.files[0];
    },
    getCurriculos(){
      axios.get(`/users`)
      .then((response) => {
        this.curriculos = response.data.users
      })
      .catch((error) => {
        console.log(error)
      })
    },
    clear(){
        this.novo = {
             name: '',
            email: '',
            phone: '',
            address: '',
            job: '',
            file: ''
        }

        this.$refs.form.reset();
    },
    enviar(){
      axios.post(`/users`, this.novo)
      .then((response) => {
        this.showAlert = true;
        console.log(response)
        this.clear();

        setTimeout(() => {
            this.showAlert = false;
        }, 3000);

        this.getCurriculos();
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="stylus">

     .bt-lista{
      width 30%
      background #000
      color #fff
      margin 16px auto 0
      text-decoration none
      padding 8px 32px
      border-radius 8px
      box-sizing border-box
    }

    /* we will explain what these classes do next! */
    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to{
        opacity: 0;
        transform: translateY(50%);
    }

    .alert{
        position: fixed;
        top 24px
        right 24px
        padding 8px 40px
        background #fff
        font-size 16px
        font-weight bold
        border-radius 12px
        border-bottom 4px solid green
    }

    .cadastro{
        display flex
        padding 32px 24px
        flex-direction column
        flex 1
        box-sizing border-box
    }

    .cadastro .tile{
        font-size 32px
        margin 0
        padding 0
    }

    .cadastro .description{
        margin 6px 0 0 0
        padding 0
    }

    .form{
        width 100%
        display flex
        flex 1
        flex-direction column
        padding 16px
        margin 32px 0 0
        box-sizing border-box
        gap 16px
    }

    .form input{
        margin 0
        padding 16px
        font-size 16px
        border 1px solid #dedede
        border-radius 4px
    }

   .form input.bt-enviar{
        margin: auto 0 0 0;
        border 0
        padding 16px
        font-size 16px
        box-sizing border-box
        background #000
        color #fff
    }
</style>