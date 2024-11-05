import Global from "@/components/Global";

export default class ServiceCoches {
  getCoches(){
    let coches = [];
    let request = "api/coches";
    let url = Global.urlApiCoches + request;

    return fetch(url).then(response =>{
      if(!response.ok){
        throw new Error('Error al cargar los coches');
      }

      return response.json();

    }).then(data =>{
      coches = data;
      return coches;
    })

  }

  postCoche(coche){
    let request = "api/Coches/InsertCoche";
    let url = Global.urlApiCoches + request;
    return fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(coche)
    }).then(response => {
      return response.json();
    }).then(data => {
      return data;
    })
  }
  
  detalleCoche(id){
    let request = "api/Coches/FindCoche/" + id;
    let url = Global.urlApiCoches + request;
    return fetch(url).then(response =>{
      return response.json();

    }).then(data =>{
      return data;
    })
  }

  updateCoche(coche){
    let request = "api/Coches/UpdateCoche";
    let url = Global.urlApiCoches + request;
    return fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(coche)
    }).then(response => {
      console.log(response);
      //!CONDICION PORQUE EN OCASIONES, EL RESPONSE VIENE VACIO Y POR ESO ME SALTABA EL ERROR DE JSON
      return response.text().then(text => text ? JSON.parse(text) : {});

    }).then(data => {
      return data;
    })
  }

  deleteCoche(id) {
    let request = "api/coches/deletecoche/" + id;
    let url = Global.urlApiCoches + request;
    return fetch(url, {
      method: "DELETE",

    }).then(response => {
      console.log(response);
      //!CONDICION PORQUE EN OCASIONES, EL RESPONSE VIENE VACIO Y POR ESO ME SALTABA EL ERROR DE JSON
      return response.text().then(text => text ? JSON.parse(text) : {});

    }).then(data => {
      return data;
    })
  }

}