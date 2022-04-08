export function getSearchApi(search, type) {
  return fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/search?medium=${type}&q=${search}`
  )
    .then((r) => r.json())
    .then((recurso) => {
      console.log(recurso, "recurso");
      if (recurso.total === 0) {
        alert("No se encuentras coincidencias");
      } else {
        let idResultados = recurso.objectIDs;
        if (idResultados.length > 20) {
          idResultados = idResultados.slice(0, 20);
        }
        const resultados = idResultados.map((id, i) => {
          return fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          )
            .then((r) => r.json())
            .then((recurso) => {
              if (recurso.primaryImageSmall) {
                return recurso;
              }
            });
        });
        return Promise.all(resultados).then((r) => r.filter((e) => e != null));
      }
    });
}

export function getSearchForArtistApi(search) {
  return fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=${search}`
  )
    .then((r) => r.json())
    .then((recurso) => {
      if (recurso.total === 0) {
        alert("No se encuentras coincidencias");
      } else {
        let idResultados = recurso.objectIDs;
        if (idResultados.length > 20) {
          idResultados = idResultados.slice(0, 20);
        }
        const resultados = idResultados.map((id) => {
          return fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          )
            .then((r) => r.json())
            .then((recurso) => recurso);
        });
        return Promise.all(resultados).then((r) => r);
      }
    });
}

export function getArtApi(id) {
  return fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
  )
    .then((r) => r.json())
    .then((recurso) => recurso);
}
