<template>
  <div>
    <h1>Borrando coche</h1>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

import ServiceCoches from '@/services/ServiceCoches';
const service = new ServiceCoches();

export default {
  name: "DeleteCoche",
  mounted() {
    let id = this.$route.params.id;
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Este coche se eliminará permanentemente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',  
      cancelButtonColor: '#3085d6',  
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        service.deleteCoche(id).then(response => {
          console.log(response);
          Swal.fire(
            'Eliminado!',
            'El coche ha sido eliminado.',
            'success'
          ).then(() => {
            this.$router.push('/'); 
          });
        })
      } else {
        console.log('Eliminación cancelada');
      }
    });
  }
}
</script>

<style>

</style>