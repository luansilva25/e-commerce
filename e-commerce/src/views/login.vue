<template>
    <VRow>
        <VCol cols="12">
            <VCard class="d-flex justify-center align-center flex-column ga-5 pa-5">
                <VCard class="bg-success pa-2" v-show="user" >
                    <VCardText >{{ okmensage }}</VCardText>
                </VCard>
                <h1 class="text-center" v-if="account">Login</h1>
                <h1 class="text-center" v-else>cadastro</h1>
            <VForm class="w-100 d-flex justify-center align-center" v-if="account" @submit.prevent="criarconta">
            <div class="w-100 d-flex justify-center flex-column  align-center">
                <VTextField :label="emaillabel" class="w-50" type="email" v-model="email"></VTextField>
                <VTextField type="password" :label="senhalabel" class="w-50" v-model="senha"></VTextField>
                <VCardActions>
                    <VBtn class="bg-blue text-white" @click="criarconta">login</VBtn>
                    <VBtn @click="account = false" class="text-blue">não possuo conta</VBtn>
                </VCardActions>
            </div>
            </VForm>
            <VForm class="w-100 d-flex justify-center align-center" v-else>
            <div  class="w-100 d-flex justify-center flex-column  align-center">
                <VTextField  :label="usernamelabel" class="w-50" v-model="username" :error="usernamevalid" :error-messages="usernamemsg"></VTextField>
                <VTextField :label="emaillabel" class="w-50" type="email" v-model="email" :error="emailvalidation" :error-messages="msgemail"></VTextField>
                <VTextField type="password" :label="senhalabel" class="w-50" v-model="senha" :error="senhavalidation" :error-messages="msgsenha"></VTextField>
                <VCardActions >
                    <VBtn class="bg-blue text-white" @click="criarconta">criar conta</VBtn>
                    <VBtn @click="account = true" class="text-blue">já possuo conta</VBtn>
                </VCardActions>
            </div>
            </VForm>
            </VCard>
        </VCol>
    </VRow>
</template>
<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

const account = ref(true)
const emaillabel = 'email/username'
const senhalabel = 'senha'
const usernamelabel = 'username'
const senha = ref(null)
const email = ref(null)
const emailvalidation = ref(false)
const msgemail = ref(null)
const senhavalidation = ref(false)
const msgsenha = ref(false)
let caracteres = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/
const user = ref(false)
const okmensage = ref(null)
const store = useStore()
const username = ref(null)
const usernamevalid = ref(false)
const usernamemsg = ref(null)
const router = useRouter()


async function criarconta(){
    if(!username.value){
        usernamevalid.value = true
        usernamemsg.value = 'preencha o seu nome corretamente'
    }
    if(!email.value.endsWith('@gmail.com') && !email.value.endsWith('@hotmail.com') && !email.value.endsWith('@yahoo.com.br')){
        emailvalidation.value = true
        msgemail.value = 'email invalido'

        setTimeout(() =>{
        emailvalidation.value = false
        msgemail.value = null
        }, 2000)
    }
    if(!caracteres.test(senha)){
        senhavalidation.value = false
        msgsenha.value = 'a senha precisa de conter caracteres especiais'

        setTimeout(() =>{
        senhavalidation.value = false
        msgsenha.value = null
        }, 2000)
    }
    if(!(senha.value.length >= 8 && senha.value.length <= 25)){
        senhavalidation.value = false
        msgsenha.value = 'a senha precisa conter de 8 a 25 caracteres'
        
        setTimeout(() =>{
        senhavalidation.value = false
        msgsenha.value = null
        }, 2000)
    }
    if(!senha.value.match(/\d/)){
        senhavalidation.value = false
        msgsenha.value = 'a senha precisa conter numeros'

        setTimeout(() =>{
        senhavalidation.value = false
        msgsenha.value = null
        }, 2000)
    }
    if(!emailvalidation.value || !usernamevalid.value && !senhavalidation.value ){
        const createuser ={
            username: username.value,
            email: email.value,
            senha: senha.value
        }

        const loguser ={
            email: email.value,
            senha: senha.value
        }
        
        if(account.value){
            store.dispatch('login', loguser)
            user.value = true
            okmensage.value = `logado com sucesso`
            senha.value = null
            email.value = null
            username.value = null

            setTimeout(() =>{
            user.value = false
            okmensage.value = null,
            router.push('/')
            }, 1000)
        }
        else{
            user.value = true
            okmensage.value = `usuario criado com sucesso`
            store.dispatch('signup', createuser)
            senha.value = null
            email.value = null

            setTimeout(() =>{
            user.value = false
            okmensage.value = null,
            account.value = false
            }, 1000)
        }
    }
}

</script>