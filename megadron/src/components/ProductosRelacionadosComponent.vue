<script setup lang="ts">

import { onMounted, ref } from 'vue';
import useProductos from './../Api/useProductos.ts'
const {  ObetnerProductosApi } = useProductos();

const emit = defineEmits(['SeleccionaProductoEmit'])

const productosRelacionados = ref([{nombre:'', imagen:'',descripcion:'',colores:[], precio:0}]);
    
onMounted(() => {
        obtieneProductos();
})

const obtieneProductos = async ()=>{
    
    const resp = await ObetnerProductosApi();
    productosRelacionados.value = resp.data;
}

const SeleccionaProducto = (producto: any)=>{
    emit('SeleccionaProductoEmit', producto);
}
</script>
<template>
<div class="container ">
    
    <div class="row">
        <h4>Productos relacionados</h4>
    </div>
    <div class="row">
        <div class="col" v-for="(product, index) in productosRelacionados" :key="index" @click="SeleccionaProducto(product)">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{product.nombre}}</h5>
                    <img :src="product.imagen"
                alt="" style="width:100%;">
                    <p class="card-text">{{product.descripcion}}</p>
                        <div class="producto-relacionado-precio">Precio:{{product.precio}} BOB</div>
                    <div>
            <div>
                <div v-for ="color in product.colores" class="color-box" :style="'background:'+ color"></div>
            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>../Api/useProductos.ts