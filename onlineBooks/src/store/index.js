import { createStore } from "vuex";
import axios from "axios";
import router from "../route/index";
import { RT_HOME, RT_LOGIN, RT_CART, MT_CART, RT_CATEG } from "../constants/routeNames";
import {errorToast } from '../utils/toast';

const url = import.meta.env.VITE_BASE_URL;

const store = createStore({
    state:{
        category:[],
        books:[],
        book:[],    
        loading: false,
        categores:[],
    },
    getters: {
        category: (state) => state.category,
        books: (state) => state.books,
        book: (state) => state.book,
        categores: (state) => state.categores,
    },
    actions: {
        async login({ commit }, payload) {
            const res = await axios.post(url + "user/signin", payload);
            if (!res.data?.tokens.access_token && res.status !== 200) {
              return;
            }
            commit("SET_TOKEN", res.data.tokens.access_token);
           
          },
      
          
        async fetchCategory({ commit }) {
            const res = await axios.get(url + "category");
            if (!res.data && res.status !== 200) {
            return;
            }
            commit("SET_CATEGORY", res.data);
        },

            
        async fetchName({ commit }, name) {
          commit("SET_LOADING", true);

          const res = await axios.get(url + `category/${name}`);
          if (!res.data && res.status !== 200) {
          return;
          }
          commit("SET_LOADING", false);
          commit("SET_CATEG", res.data);
      },

      

      async fetchSingleBook({commit}, id) {
       
        const res  = await axios.get(url+`book/${id}`)
        console.log(id);
        if(!res.data && res.status !==200) {
          return;
        }
        
        commit("SET_SINGLEBOOK", res.data);

        },

        
        async fetchBooks({ commit }) {
          commit("SET_LOADING", true);
          try { 
            
              const res = await axios.get(url + "book");
              if (!res.data && res.status !== 200) {
                return;
              }
              commit("SET_LOADING", false);
              commit("SET_BOOKS", res.data);
          } catch(error) {
            errorToast("Cannot fetch books")
          }
        },

      async fetchSearch({commit}, name) {
       
        const res  = await axios.get(url+`book/search/?name=${name}`)
        if(!res.data && res.status !==200) {
          return;
        }
        
        commit("SET_BOOKS", res.data);

        }
      },


    mutations: {
            
        SET_LOADING: (state, payload) => (state.loading = payload),

        SET_TOKEN: (_, payload) => {
            localStorage.setItem("token", payload);
          },
      
        SET_USER: (state, payload) => {
            state.user = payload;
            router.push({ name: RT_HOME });
        },
        
        SET_CATEGORY: (state, payload) => (state.category = payload),
        SET_BOOKS: (state, payload) => (state.books = payload),
        
        SET_SINGLEBOOK: (state, payload) => {
          state.book = payload;
          router.push({name:RT_CART})

        },

        SET_CATEG: (state, payload) => {
          state.categores = payload;
          router.push({name:RT_CATEG})

        },

        LOGOUT: (state) => {
          localStorage.removeItem("token");
          router.push({ name: RT_LOGIN });
        },
    }
})

export default store;