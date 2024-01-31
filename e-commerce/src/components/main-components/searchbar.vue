<template>
    <VTextField :placeholder="text" append-icon="mdi-magnify" class="pa-5" v-model.trim="search" @input="searchbar(search)"></VTextField>
</template>
<script setup>
import { ref } from "vue"
import { useStore } from "vuex"

    const text = 'o que voce procuta'
    const store = useStore()
    const search = ref(null)
    function searchbar(search){
        store.dispatch('search', search)
        console.log(search)
    }
</script>