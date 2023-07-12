<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  producto: {
    type: Object as any,
  }
});

const producto = {
        id:1,
        imagen: "https://cdn.shopify.com/s/files/1/0640/5067/files/pexels-photo-53903_large.jpg?v=1492718386",
        nombre: "Dron LU3 MAX GPS 8K HD",
        descripcion: "Dron LU3 MAX GPS 8K HD profesional con <b>cámara Dual</b>,cardán autoestabilizador, Motor sin escobillas para evitar obstáculos, cuadricóptero plegable",
        precio:"620",
        colores: ["red", "blue", "black", "yellow"]
    };

const configuracionPagina = 
    {
        marca: "MegaDron",
        menuColor: "lightblue",
        footerColor: "slategrey",
        precioEstilos: "background: orangered; color: white; font-weight: bold;",
        menus: [{
            etiqueta: "Inicio",
            url: "?"
        },{
            etiqueta: "Tienda",
            url: "?"
        }]
      };
const pedido = ref(
{
    id:0,
    cantidad: 1,
    color:''
});
const comprar = (pedido:any)=>{
    
    //this.pedido.id = this.producto.id;
                //alert(`id: ${this.pedido.id} - cantidad: ${this.pedido.cantidad} - color: ${this.pedido.color}`);
    console.log(pedido);
}
</script>
<template>

<div class="container">
    
    <div class="row">
        <h3>{{props.producto ? props.producto.nombre :producto.nombre}}</h3>
    </div>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4 ">
            <img :src="props.producto ? props.producto.imagen : producto.imagen"
                alt="" style="width:100%;">
        </div>
        <div class="col-12 col-sm-6  col-md-8">
            <h6>{{props.producto ? props.producto.descripcion :producto.descripcion}}</h6>
            <div class="p-3 mb-2 text-white" :style="configuracionPagina.precioEstilos">
                Precio: {{props.producto ? props.producto.precio :producto.precio}} BOB
            </div>
            <h5>Color</h5>
            <div>
                <template v-for ="color in (props.producto ? props.producto.colores : producto.colores)" >
                    <div  class="color-box clic" :style="'background:'+ color" @click="pedido.color = color"></div>

                </template>
            </div>
            <h5>Cantidad</h5>
            <div class="quantity">
                <button v-on:click="pedido.cantidad -= 1">-</button> <div>{{pedido.cantidad}}</div> <button v-on:click="pedido.cantidad += 1">+</button>
            </div>
            <div class="buy-box">
                <button type="button" class="btn btn-primary" 
                    :disabled="pedido.cantidad < 1 || pedido.color == ''" 
                    v-on:click="comprar(pedido)" >Comprar</button>
            </div>
            
        </div>
    </div>
</div>

</template>