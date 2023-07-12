<script setup lang="ts">
//import { ref } from 'vue'
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

<template>
  <nav class="navbar navbar-expand-lg " :style = "`background-color:${configuracionPagina.menuColor}`" >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{{configuracionPagina.marca}}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li v-for="menu in configuracionPagina.menus" class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">{{ menu.etiqueta}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<style scoped>
</style>
