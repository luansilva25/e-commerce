<template>
  <VRow>
    <VCol cols="12">
      <VCard
        v-for="product in detail"
        :key="product.id"
        class="d-flex pa-5 w-100 h-screen justify-center align-center"
      >
        <VImg :src="product.img" width="500" height="500" class="rounded-pill"></VImg>
        <div class="description">
          <VCardTitle>{{ product.nome }}</VCardTitle>
          <VCardTitle
            >R$ {{ product.preco }} ou
            <VCardSubtitle
              >parcelado em X{{ product.parcela }} de R$
              {{ (product.preco / product.parcela).toFixed(2) }}</VCardSubtitle
            >
            <VCardTitle>marca: {{ product.marca }}</VCardTitle>
          </VCardTitle>
          <p>{{ product.descricao }}</p>
          <VCardActions>
            <VBtn class="bg-blue text-white" @click="buy(product.id)">comprar</VBtn>
            <VBtn append-icon="mdi-cart" class="text-blue" @click="addtocart(product.id)">adicionar ao carrinho</VBtn>
          </VCardActions>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
const route = useRoute();
const store = useStore();

const detail = computed(() => store.getters.productdetails);
const router = useRouter();

const verification = ref(false)
onMounted(async () => {
  const id = route.params.id;
  store.dispatch("product", id);
  console.log(detail);
});

function addtocart(product){
  const filter = store.state.cart.find(item => item.id === product)
  if(filter){
    alert('esse produto ja existe em seu carrinho')
  }
  else{
    store.dispatch('addtocart', product)
  }
}
function buy(product){
  const filter = store.state.cart.find(item => item.id === product)

  if(filter){
    alert('esse produto ja existe em seu carrinho')
  }
  else{
    store.dispatch('addtocart', product)
    router.push('/cart')
  }
}
</script>
<style scoped>
.description {
  display: flex;
  height: 72vh;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
</style>