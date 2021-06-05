import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

vue.use(vuex, axios)

export default new vuex.Store({
    state: {
        posts: []
    },
    getters: {

    },
    mutations: {
        SET_POSTS(state, posts){
            state.posts = posts
        }
    },
    actions: {
        loadPosts({commit}){
            console.log('test');
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(data => {
                    let posts = data.data;
                    commit("SET_POSTS", posts)
                })
                .catch(error => console.log(error))
        }
    },
})