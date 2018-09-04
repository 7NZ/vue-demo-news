<template>
  <div class="nav">
    <li v-for="i in list" :key="i.id">
      <router-link :to="{name:'cates',params:{ catid:i.id }}">
        {{ i.name }}
      </router-link></li>
  </div>
</template>

<script>
import 'whatwg-fetch'
import {apiRoot} from '@/config/index.js'

export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      var _self = this
      fetch(apiRoot + '/categories/')
        .then(function (response) {
          console.log(response)
          return response.json()
        }).then(function (json) {
          console.log('nav parsed json', json)
          _self.list = json
        }).catch(function (ex) {
          console.log('parsing failed', ex)
        })
    }
  }
}
</script>
