<template>
  <div id="app">
    <p>  Umur : {{buahMangga.umur}} </p>
    <p> Buah Mangga : {{ buahMangga.harvested }} </p>
    <p> Tinggi : {{buahMangga.tinggi}} </p>



  </div>
</template>

<script>
import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'
Vue.use(VueFire)

var config = {
  apiKey: 'AIzaSyDn1TEJlick5eX6QUdyT3i1jyd7GNhFC7c',
  authDomain: 'pohon-mangga.firebaseapp.com',
  databaseURL: 'https://pohon-mangga.firebaseio.com',
  projectId: 'pohon-mangga'
}
firebase.initializeApp(config)
var db = firebase.database()

export default {
  name: 'app',
  data () {
    return {
      mangga: ''
    }
  },
  firebase () {
    return {
      buahMangga: {
        source: db.ref('mangga'),
        asObject: true
      }
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
