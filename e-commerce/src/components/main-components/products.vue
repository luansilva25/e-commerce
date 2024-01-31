<template>
  <div class="pa-10">
    <VRow>
      <VCol
        cols="12"
        xl="2"
        lg="4"
        md="6"
        sm="6"
        xs="12"
        v-for="produto in showstore"
        :key="produto.id"
      >
        <VHover v-slot="{ isHovering, props }">
          <VCard v-bind="props" :elevation="isHovering ? 12 : 6" :class="{ 'on-hover': isHovering }">
            <VCardItem>
              <VImg :src="produto.img" cover height="300"></VImg>
              <VCardTitle style="color: rgb(2, 255, 2); font-weight: 700">{{
                produto.frete
              }}</VCardTitle>
              <VCardTitle>{{ produto.nome }}</VCardTitle>
              <VCardSubtitle>R$ {{ produto.preco }} ou</VCardSubtitle>
              <VCardSubtitle
                >parcelado em X{{ produto.parcela }} de R$
                {{
                  (produto.preco / produto.parcela).toFixed(2)
                }}</VCardSubtitle
              >
              <VCardActions>
                <router-link :to="link + produto.id"><VBtn >ver mais</VBtn></router-link>
              </VCardActions>
            </VCardItem>
          </VCard>
        </VHover>
      </VCol>
    </VRow>
  </div>
</template>
<script setup>
import { computed} from "vue";
import { useStore } from "vuex";

const store = useStore();
const link = '/products/'
const showstore = computed(() => store.getters.showstore);
</script>
<style scoped>
.v-card{
    height: 450px;
}
.v-card.on-hover{
    width: 400px;
    transition: .5s;
    height: 480px;
}
.v-card-actions{
    display: none;
}
.v-card.on-hover .v-card-actions{
    display: flex;
    transition: .5s;
}
</style>