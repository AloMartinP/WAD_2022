import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
    strict: true,
    state: {
        posts: []

    },
    getters: {
        posts: state => {
            return state.posts;
        }
    },
    mutations: {
        SET_Item (state, items) {
            state.posts = items
        }
    },
    actions: {
        loadItems({ commit }) {
            axios
                .get('https://api.npoint.io/b78f1e1fe1444e3386b7', {
                    headers: {
                        'post-key' : 'post-id',
                    }
                })
                .then(response => response.data)
                .then(posts => {
                    console.log(posts);
                commit('SET_Item', posts)
                })
        }
    }
})