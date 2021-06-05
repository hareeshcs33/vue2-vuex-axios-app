<template>
  <div class="container home">
    <h1>Home</h1>
    <button class="btn" @click="getPosts">Get posts</button>
    <!-- <div>A{{this.$store.state.posts}}</div> -->
    <!-- <div>================</div> -->
    <!-- <div>a{{posts}}</div> -->
    <p class="mb-1" v-for="(item, index) in posts" :key="index">{{item.title}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  mounted(){
    this.$store.dispatch('loadPosts')
  },
  methods: {
    getPosts(){
      console.log('get posts')
    }
  },
  computed: {
    ...mapState([
      'posts'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
