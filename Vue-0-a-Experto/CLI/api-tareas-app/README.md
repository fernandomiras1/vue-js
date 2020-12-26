# formulario-1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

 Id de forma automatica
npm i shortid

run server: 

json-server db.json --port 4000


-------------

base
baseURL: 'http://localhost:4000/'
add
await clienteAxios.post('/productos', producto);
borrar
await clienteAxios.delete(`/productos/${id}`);
editar
await clienteAxios.put(`/productos/${producto.id}`, producto);