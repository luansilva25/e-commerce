<template>
  <Vrow>
    <div v-if="cart.length === 0" class="w-100 h-100 d-flex justify-center align-center">
        <h1 prepend-icon="mdi-cart">nenhum produto no carrinho encontrado</h1>
    </div>
    <div class="d-flex justify-center align-start" v-else>
    <Vcol cols="12" v-for="products in cart" :key="products.id">
      <VCard width="750" class="d-flex pa-5">
        <div class="d-flex flex-column justify-center align-center">
          <VImg
            :src="products.img"
            width="100"
            height="100"
            class="rounded-pill"
          ></VImg>
          <VCardActions class="d-flex flex-column ga-5">
            <div class="d-flex align-center justify-center">
              <VBtn :disabled="products.qtd === 4" v-if="products.qtd === 4">+</VBtn>
              <VBtn @click="add(products.id)" v-else>+</VBtn>
              <p>{{ products.qtd }}</p>
              <VBtn @click="dim(products.id)" v-if="products.qtd > 1">-</VBtn>
              <VBtn :disabled="products.qtd === 1" v-else>-</VBtn>
              <p :style="{ color: verification ? 'red' : false }">
                {{ msgverificated }}
              </p>
            </div>
            <VBtn class="bg-red text-white" @click="deleteproduct(products.id)">delete</VBtn>
          </VCardActions>
        </div>
        <div>
          <VCardTitle>{{ products.nome }}</VCardTitle>
          <p>{{ products.descricao }}</p>
        </div>
      </VCard>
    </Vcol>
    <VCard class="w-100 d-flex justify-center align-center flex-column ga-4" height="500">
        <div>
        <VCardTitle style="font-size: 50px;">total</VCardTitle>
        <VCardTitle style="font-size: 40px;">R$ {{ (total).toFixed(2) }}</VCardTitle>
    </div>
        <VCardActions>
          <VCol cols="auto" >
            <VDialog transition="dialog-top-transition" width="auto">
              <template #activator="{ props }">
            <VBtn v-bind="props" class="bg-blue text-white" style="width: 300px; height: 50px;">Finalizar compra</VBtn>
          </template>
          <template #default="{ isActive }">
            <VCard class="d-flex align-center justify-center flex-column pa-5 ga-3">
              <VIcon icon="mdi-check-circle" color="success" size="100"></VIcon>
              <VCardTitle>compra finalizada com sucesso</VCardTitle>
              <VCardActions>
                <VBtn @click="Finalizar(), isActive.value = false" class="bg-success text-white" width="120" height="40">ok</VBtn>
              </VCardActions>
            </VCard>
          </template>
          </VDialog>
          </VCol>
        </VCardActions>
    </VCard>
    </div>
  </Vrow>
</template>
<script setup>
import { computed, ref} from "vue";
import { useStore } from "vuex";
const store = useStore();
const cart = computed(() => store.getters.cart);
const verification = ref(false);


const total = computed(() => store.state.total)



function add(id) {
    store.commit('addqtd', id)
}
function dim(id) {
    store.commit('dimqtd', id)
}

function deleteproduct(product){
    store.dispatch('deleteproduct', product)
}

function Finalizar(){
  store.dispatch('finalizar')
}
</script>