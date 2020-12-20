# listatareas

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


/////////////// FER

Llamado a las API utilizamos una libreria llamada vue-resource
link: https://github.com/pagekit/vue-resource

npm install vue-resource

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