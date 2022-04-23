import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        homeInfo: {}
    },
    mutations: {
        homeInfo(state, info) {
            state.homeInfo = info
        }
    },
    actions: {
        loadHomeInfo({commit}) {
            return axios.get("../data/intro.json").then(response => {
                if(response.statusText === "OK") {
                    commit('homeInfo', response.data)
                } else {
                    console.log("문제 발생")
                    // TODO: error handling
                }
            }).catch(error => {
                console.log('error', error)
                // TODO: error handling
            })

        }
    },
    modules: {}
})
