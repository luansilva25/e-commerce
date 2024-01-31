let timer;


import axios from "axios"


export default {
    state() {
        return {
            userID: null,
            token: null,
            tokenExperation: null,
            didlogout: false
        }
    },
    getters: {
        userID(state) {
            return state.userID
        },
        token(state) {
            return state.token
        },
        isauthenticated(state) {
            return !!state.token
        },
        didautologout(state){
            return state.didlogout
        }
        
    },
    mutations: {
        setuser(state, payload) {
            state.token = payload.token,
            state.userID = payload.userID,
            state.didlogout = false
            console.log(state.token)
            console.log(state.userID)
        },
        didlogout(state){
            state.didlogout = true
        }
    },
    actions: {
        async signup(context, payload) {
            return context.dispatch('auth', {
                ...payload,
                mode: false
            })

        },
        async login(context, payload) {
            return context.dispatch('auth', {
                ...payload,
                mode: true
            })

        },
        async auth({commit, getters, context}, payload){
            const mode = payload.mode
            let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDz7TdGK0sEK1iX8DbdwRyi-b4lWpTO0uQ"
            
            if(mode === true){
                url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDz7TdGK0sEK1iX8DbdwRyi-b4lWpTO0uQ"
                const data = await axios.post(url, {
                    email: payload.email,
                    password: payload.senha,
                    ReturnSecureToken: true
                }).then((response) => {
                    if (response.status === 200) {
                        console.log('servidor esta rodando')
                    }
                    return response
                }).catch((error) => {
                    console.log(error)
                })
                const responsedata = await data.data

                commit('setuser', {
                    token: responsedata.idToken,
                    userID: responsedata.localId,
                    tokenExperation: responsedata.expiresIn,
                })

            localStorage.setItem('token', responsedata.idToken)
            localStorage.setItem('userId', responsedata.localId)

                const token = getters.token

                const db = await axios.get(`https://user-ecommerce-6b7e1-default-rtdb.firebaseio.com/${responsedata.localId}.json?auth=` + token)
                console.log(responsedata)
                console.log(token)
                console.log(db)
                console.log(db.data)
            }
            else{
                url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDz7TdGK0sEK1iX8DbdwRyi-b4lWpTO0uQ"

                console.log(payload.email, payload.senha)
            const data = await axios.post(url, {
                email: payload.email,
                password: payload.senha,
                ReturnSecureToken: true
            }).then((response) => {
                if (response.status === 200) {
                    console.log('servidor esta rodando')
                }
                return response
            }).catch((error) => {
                console.log(error)
            })



            const responsedata = await data.data

            const expiresIn = +responsedata.expiresIn * 1000;
            const experationDate = new Date().getTime() + expiresIn 

            localStorage.setItem('token', responsedata.idToken)
            localStorage.setItem('userId', responsedata.localId)
            localStorage.setItem('TokenExperation', experationDate)

            timer = setTimeout(() =>{
                context.dispatch('autologout')
            }, expiresIn)
            commit('setuser', {
                token: responsedata.idToken,
                userID: responsedata.localId,
                tokenExperation: experationDate
            })

            const db = await axios.post(`https://user-ecommerce-6b7e1-default-rtdb.firebaseio.com/${responsedata.localId}.json`,{
                id: responsedata.localId,
                username: payload.username,
                email: payload.email,
                password: payload.senha,
            }).then((response) =>{
                if(response.status === 200){
                    console.log('usuario adicionado ao banco:' + payload)
                }
            }).catch((error) =>{
                console.log(error)
            })

            console.log(responsedata)
            }
           
        },
        trylogin(context){
            const token = localStorage.getItem('token')
            const userId = localStorage.getItem('userId')
            const tokenExperation = localStorage.getItem('tokenExperation')

            const expiresIn = +tokenExperation - new Date().getDate()

            if(expiresIn < 0){
                return;
            }   

            timer = setTimeout(() =>{
                context.dispatch('autologout')
            }, expiresIn)
            if(token && userId){
                context.commit('setuser', {
                    token: token,
                    userId: userId,
                })
            }
        },
        logout({ commit }) {
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('tokenExperation')
            
            clearTimeout(timer);

            commit('setuser', {
                token: null,
                userID: null,
            })
        },
        autologout(context){
            context.dispatch('logout')
            context.commit('didlogout')
        }
    }
}