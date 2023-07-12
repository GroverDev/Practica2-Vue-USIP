
<template>
        <footer :style="`background-color:${configuracionPagina.footerColor}`">
            
        </footer>
</template>
<script setup lang="ts">

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
</script>