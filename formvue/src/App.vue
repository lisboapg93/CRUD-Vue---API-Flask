<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
html,body{
  display flex
  justify-content center
  background-color #dedede
  width 100%
  height 100%
  padding 16px
  margin 0
  box-sizing border-box
}

#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  display flex
  background #fff
  height fit-content
  border-radius 16px
  flex 1
  max-width 720px
</style>
