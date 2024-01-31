<template>
<div>
  <VNavigationDrawer v-model="open" class="d-md-none d-flex"  location="right">
    <VToolbarTitle>menu</VToolbarTitle>
    <VList >
      <VListItem>
        <VListItemTitle icon="mdi-home">home</VListItemTitle>
      </VListItem>
      <VListItem>
        <VListItemTitle icon="mdi-account">login</VListItemTitle>
      </VListItem>
      <VListItem>
        <VListItemTitle icon="mdi-file">about</VListItemTitle>
      </VListItem>
      <VListItem>
        <VListItemTitle icon="mdi-phone">contact</VListItemTitle>
      </VListItem>
    </VList>
  </VNavigationDrawer>
  <VAppBar>
    <VAppBarTitle>E-commerce</VAppBarTitle>
    <VList class="d-md-flex d-none justify-center align-center">
      <VListItem >
        <router-link to="/" class="text-decoration-none text-black"><VListItemTitle>home</VListItemTitle></router-link>
      </VListItem>
      <VListItem>
        <router-link to="/about" class="text-decoration-none text-black"><VListItemTitle>about</VListItemTitle></router-link>
      </VListItem>
      <VListItem>
        <router-link to="/contact" class="text-decoration-none text-black"><VListItemTitle>contact</VListItemTitle></router-link>
      </VListItem>
      <VMenu v-if="isauthenticated" location="bottom"> 
        <template #activator="{ props }">
       <VChip v-bind="props"><VIcon icon="mdi-account"></VIcon></VChip>
        </template>
        <VList>
          <VListItem>
            <VListItemTitle>sua conta</VListItemTitle>
          </VListItem>
          <VListItem >
            <VListItemTitle append-icon="mdi-Logout" style="color: red" @click="logout">logout</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <VListItem v-else>
        <router-link to="/login" class="text-decoration-none text-black"><VListItemTitle>login</VListItemTitle></router-link>
      </VListItem>
      <VListItem>
        <router-link to="/cart" class="text-decoration-none text-black"><VIcon icon="mdi-cart"></VIcon>{{cartnotification}}</router-link>
      </VListItem>
    </VList>
    <VAppBarNavIcon class="d-md-none d-flex" @click="open = !open"></VAppBarNavIcon>
  </VAppBar>
  
</div>
</template>
<script  setup>
import { ref, computed } from "vue";
import { useStore } from 'vuex'
const open = ref(false)
 
const store = useStore();

const cartnotification = computed(() => store.state.cart.length)
const isauthenticated = computed(() => store.getters.isauthenticated)

function logout(){
  store.dispatch('logout')
}
</script>