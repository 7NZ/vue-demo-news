<template>
  <div class="news_list">
    <ul>
      <!--Vue 2.2.0+的版本里，当在组件中使用v-for时，key是必须的 -->
      <li v-for="i in list" :key="i.id">
        <span>[ {{ i.date.split('T')[0] }} ]</span>
        <router-link :to="{name:'news',params:{ newsid:i.id }}">
          {{i.title.rendered}}
        </router-link>
      </li>
      <div class="loading" v-if="!flag"><p>加载中...</p></div>
      <!-- <div v-if="dataIsempty()">没有数据</div> -->
    </ul>
  </div>
</template>

<script>
import 'whatwg-fetch'
import {apiRoot} from '@/config/index.js'

export default {
  data () {
    return {
      listId: '',
      flag: false,
      list: []
    }
  },
  created () {
    this.getList()
  },
  // beforeRouteUpdate (to, from, next) {
  //   var _that = this
  //   var catID = to.params.catid
  //   console.log(catID)
  //   fetch('http://127.0.0.114/wp-json/wp/v2/posts?categories=' + catID)
  //     .then(function (response) {
  //       return response.json()
  //     }).then(function (json) {
  //       console.log('list parsed json', json)
  //       _that.list = json
  //       _that.flag = true
  //     }).catch(function (ex) {
  //       console.log('parsing failed', ex)
  //     })
  //   next()
  // },
  methods: {
    getList () {
      var that = this
      var catID = this.$route.params.catid
      console.log(catID)
      var url = ''
      if (catID) {
        url = apiRoot + '/posts?categories=' + catID
      } else {
        // 进入主页首次加载获取列表api路径
        url = apiRoot + '/posts/'
      }
      that.flag = false
      fetch(url)
        .then(function (response) {
          return response.json()
        }).then(function (json) {
          console.log('list parsed json', json)
          that.list = json
          that.flag = true
          return fetch(apiRoot + '/media?parent=74751')
        }).then(function (res) {
          // console.log('2nd res', res.json())
          return res.json()
        }).then(function (res) {
          console.log('2nd after', res)
          var imgUrl = res[0].source_url // 缩略图
          console.log(imgUrl)
        })
        .catch(function (ex) {
          console.log('parsing failed', ex)
        })
    },
    dataIsempty () {
      if (Array.isArray(this.list) && this.list.length <= 0) {
        return true
      } else {
        return false
      }
    }
  },
  // 在beforeRouteUpdate根据路由变化获取数据时，
  // 当首次进入主页面点击任一个分类，获取不到params.catid，列表数据不会变化
  // 再点击别的分类时才能获取到数据
  // 改为watch,监听路由变化
  watch: {
    '$route' (to, from) {
      this.getList()
    }
  }
}
</script>
