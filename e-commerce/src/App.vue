<template>
  <v-app>
      <cabecalho />
        <VMain>
        <router-view/>
        </VMain>
      <rodape />
  </v-app>
</template>

<script setup>
import { computed, onMounted} from 'vue';
import { useStore } from 'vuex';
import cabecalho from './components/app-components/cabecalho.vue';
import rodape from './components/app-components/rodape.vue';

const store = useStore()

computed(() => {
  return store.getters.didautologout
})

onMounted (() =>{
  store.dispatch('trylogin')
})


</script>

