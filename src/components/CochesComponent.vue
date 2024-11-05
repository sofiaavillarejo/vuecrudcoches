<template>
  <div>
    <h1>Coches Component</h1>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Conductor</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coche in coches" :key="coche">
          <td>{{ coche.idCoche }}</td>
          <td>{{ coche.marca }}</td>
          <td>{{ coche.modelo }}</td>
          <td>{{ coche.conductor }}</td>
          <td><img style="width: 150px;" :src="coche.imagen" /></td>
          <td>
            <router-link class="btn btn-info" :to="'/detalles/' + coche.idCoche">Detalles</router-link>
            <router-link class="btn btn-warning" :to="'/modificarcoche/' + coche.idCoche">Modificar</router-link>
            <router-link class="btn btn-danger" :to="'/deletecoche/' + coche.idCoche">Eliminar</router-link>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();

export default {
  name: "CochesComponent",
  data(){
    return {
      coches: []
    }
  },
  mounted(){
    service.getCoches().then(result =>{
      this.coches = result;
      console.log(this.coches);
    })
  }
  
}
</script>

<style>

</style>