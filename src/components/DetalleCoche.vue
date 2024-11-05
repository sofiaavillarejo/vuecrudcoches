<template>
  <div>
    <h1>Detalles del coche {{ $route.params.id }}</h1>
    <table class="table table-hover" v-if="coche">
      <thead>
        <tr>
          <th>ID</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Conductor</th>
          <th>Imagen</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ coche.idCoche }}</td>
          <td>{{ coche.idCoche }}</td>
          <td>{{ coche.modelo }}</td>
          <td>{{ coche.conductor }}</td>
          <td><img style="width: 150px;" :src="coche.imagen"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCoches from '@/services/ServiceCoches';
const service = new ServiceCoches();

export default {
  name: "DetalleCoche",
  data(){
    return {
      coche: null
    }
  },
  mounted(){
    let id = this.$route.params.id;
    this.detalleCoche(id);
  },
  methods: {
    detalleCoche(id) {
      service.detalleCoche(id).then(result => {
        this.coche = result;
      })
    }
  }
}
</script>

<style>

</style>