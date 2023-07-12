<script setup lang="ts">
import { ref } from 'vue';
import MenuComponent from './components/MenuComponent.vue';
import PieComponent from './components/PieComponent.vue';
import ProductoComponent from './components/ProductoComponent.vue';
import ProductosRelacionadosComponent from './components/ProductosRelacionadosComponent.vue';
 
const productoSelecionado: any = ref();
const seleccionoAseguradoEmit=(producto: any)=>{
  
  productoSelecionado.value = producto;
}
</script>

<template>
  <MenuComponent></MenuComponent>
  <ProductoComponent :producto="productoSelecionado"></ProductoComponent>
  <ProductosRelacionadosComponent @SeleccionaProductoEmit="seleccionoAseguradoEmit"></ProductosRelacionadosComponent>
  <PieComponent ></PieComponent>
</template>

<style scoped>

</style>
