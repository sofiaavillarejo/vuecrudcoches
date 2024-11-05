<template>
  <div>
    <h1>Modificar Coche</h1>
    <form v-if="coche" v-on:submit.prevent="updateCoche()">
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
      <button class="btn btn-warning">Modificar</button>
    </form>
  </div>
</template>

<script>
import ServiceCoches from '@/services/ServiceCoches';
const service = new ServiceCoches();

export default {
  name: "ModificarCoche",
  data() {
    return {
      coche: null
    }
  },
  mounted() {
    let id = this.$route.params.id;
    service.detalleCoche(id).then(result=>{
      this.coche = result;
      console.log(result);
    })
  },
  methods: {
    updateCoche(){
      service.updateCoche(this.coche).then(result => {
        console.log("Coche actualizado", result);
        // this.$router.push("/");
      })
    }
  }
}
</script>

<style>

</style>