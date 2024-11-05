<template>
  <div>
    <h1>Crear Coche</h1>
    <form v-on:submit.prevent="crearCoche()">
      <label>Introduce ID</label>
      <input class="form-control" type="number" v-model="coche.idCoche"/>
      <label>Introduce marca</label>
      <input class="form-control" type="text" v-model="coche.marca"/>
      <label>Introduce modelo</label>
      <input class="form-control" type="text" v-model="coche.modelo"/>
      <label>Introduce conductor</label>
      <input class="form-control" type="text" v-model="coche.conductor"/>
      <label>Introduce url de imagen</label>
      <input class="form-control" type="text" v-model="coche.imagen"/>
      <hr/>
      <button class="btn btn-success">Crear coche</button>
    </form>
  </div>
</template>

<script>

import ServiceCoches from '@/services/ServiceCoches';
const service = new ServiceCoches();

export default {
  name: "CrearCoche",
  data(){
    return {
      coche: {
        idCoche: 0,
        marca: '',
        modelo: '',
        conductor: '',
        imagen: ''
      },
      coches: []
    }
  },
  methods: {
    crearCoche(){
      const nuevoCoche = {
        idCoche: this.coche.idCoche,
        marca: this.coche.marca,
        modelo: this.coche.modelo,
        conductor: this.coche.conductor,
        imagen: this.coche.imagen
      };

      service.postCoche(nuevoCoche).then(result => {
        console.log("AQUIIIII" + result);
        this.coches.push(result);
        this.$router.push("/");
      })
    }
  }
}
</script>

<style>

</style>