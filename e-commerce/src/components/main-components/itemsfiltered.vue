<template>
  <VNavigationDrawer>
    <VAppBarTitle class="w-100 d-flex justify-center align-center pa-3"
      >filtro</VAppBarTitle
    >
    <VList>
      <v-list-group>
        <template #activator="{ props }">
          <VListItem v-bind="props">preco</VListItem>
        </template>
        <VList class="bg-grey-lighten-4">
          <VCheckbox
            v-for="preco in precos"
            :key="preco.id"
            :label="'R$' + '  ' + preco.preco"
            @change="filtraritens(preco.preco, preco.check, preco.id)"
            v-model="preco.check"
          ></VCheckbox>
        </VList>
      </v-list-group>
      <VListGroup>
        <template #activator="{ props }">
          <VListItem v-bind="props">categoria</VListItem>
        </template>
        <VList class="bg-grey-lighten-4">
          <VCheckbox
            v-for="produto in produtos"
            :key="produto.id"
            :label="produto.categoria"
            @change="filtraritens(produto.categoria, produto.check, produto.id)"
            v-model="produto.check"
          ></VCheckbox>
        </VList>
      </VListGroup>
      <VListGroup>
        <template #activator="{ props }">
          <VListItem v-bind="props">parcelas</VListItem>
        </template>
        <VList class="bg-grey-lighten-4">
          <VCheckbox
            v-for="parcela in parcelas"
            :key="parcela.id"
            :label="parcela.parcela"
            @change="filtraritens(parcela.parcela, parcela.check, parcela.id)"
            v-model="parcela.check"
          ></VCheckbox>
        </VList>
      </VListGroup>
      <VListGroup>
        <template #activator="{ props }">
          <VListItem v-bind="props">frete</VListItem>
        </template>
        <VList class="bg-grey-lighten-4">
          <VCheckbox label="gratis" @change="filtrarfretegratis('frete gratis', frete)" v-model="frete"></VCheckbox>
        </VList>
      </VListGroup>
      <VListGroup>
        <template #activator="{ props }">
          <VListItem v-bind="props">marcas</VListItem>
        </template>
        <VList class="bg-grey-lighten-4">
          <VCheckbox
            v-for="marca in marcas"
            :key="marca.id"
            :label="marca.marca"
            @change="filtraritens(marca.marca, marca.check, marca.id)"
            v-model="marca.check"
          ></VCheckbox>
        </VList>
      </VListGroup>
    </VList>
  </VNavigationDrawer>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";

const parcelas = reactive([
  {
    id: 1,
    parcela: 10,
    check: false,
  },
  {
    id: 2,
    parcela: 12,
    check: false,
  },
]);
const produtos = reactive([
  {
    id: 1,
    categoria: "tenis",
    check: false,
  },
  {
    id: 2,
    categoria: "calça",
    check: false,
  },
  {
    id: 3,
    categoria: "moletom",
    check: false,
  },
  {
    id: 4,
    categoria: "camiseta",
    check: false,
  },
]);
const precos = reactive([
  {
    id: 1,
    preco: "50-100",
    check: false,
  },
  {
    id: 2,
    preco: "101-300",
    check: false,
  },
  {
    id: 3,
    preco: "301-500",
    check: false,
  },
  {
    id: 4,
    preco: "500+",
    check: false,
  },
]);
const marcas = reactive([
  {
    id: 1,
    marca: "nike",
    check: false,
  },
  {
    id: 2,
    marca: "adidas",
    check: false,
  },
  {
    id: 3,
    marca: "mizuno",
    check: false,
  },
  {
    id: 4,
    marca: "puma",
    check: false,
  },
]);

const frete = ref(false);

const store = useStore();

function filtraritens(produto, check, id) {
  if (check && (id === 1 || id === 2 || id === 3 || id === 4)) {
    store.dispatch("filtraritens", produto);
    console.log(id);
    console.log(check);
    console.log(produto);
  }
  if (!check && (id === 1 || id === 2 || id === 3 || id === 4)) {
    store.dispatch("removefilter", produto);
    console.log(id);
    console.log(check);
  }
}

function filtrarfretegratis(frete, check){
  if(check){
    store.dispatch('filtraritens', frete)
    console.log(check);
    console.log(frete);
  }
  else{
    store.dispatch('removefilter', frete)
    console.log(check);
    console.log(frete);
  }
}
</script>