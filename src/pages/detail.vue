<template>
    <div class="detail">
      <!-- title.rendered会报错Error in render: "TypeError: Cannot read property 'rendered' of undefined"  -->
      <div v-if="loading">加载中...</div>
      <h1>{{ detail.title.rendered }}</h1>
      <div v-html="detail.content.rendered"></div>
    </div>
</template>

<script>
import {apiRoot} from '@/config/index.js'

export default {
  data () {
    return {
      loading: true,
      detail: []
    }
  },
  created () {
    var that = this
    var newsID = this.$route.params.newsid
    fetch(apiRoot + '/posts/' + newsID)
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        console.log('detail parsed json', json)
        that.detail = json
        that.loading = false
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }
}
</script>
