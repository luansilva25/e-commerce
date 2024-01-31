<template>
  <div>
  <search @reset="reset"/>
  <containt />
  <carrossel />
  <products />
  </div>
</template>

<script setup>
import products from '@/components/main-components/products.vue';
import search from '../components/main-components/searchbar.vue';
import carrossel from '@/components/main-components/carrossel.vue';
import containt from '../components/app-components/containt.vue'

</script>
