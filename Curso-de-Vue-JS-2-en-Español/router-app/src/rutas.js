import InicioPage from './pages/Inicio';
// import UsuariosPage from './pages/Usuarios';
import InfoUserPage from './pages/InfoUserPage';

// Lazy loading
// De esta Forma WebPack va a generar otro build. Y lo cargaremos cunado el cliente acceda a la pagina.
const UsuariosPage = resolve => {
  require.ensure(['./pages/Usuarios'], () => {
    resolve(require('./pages/Usuarios'));
  })
}

export const rutas = [
  { path: '', component: InicioPage },
  { path: '/usuarios', component:  UsuariosPage},
  { path: '/usuarios/:id', component: InfoUserPage, name: 'infoUsuario' },
  // Podemos hacer un redireccionamiento
  { path: '/users', redirect: '/usuarios'},
  // Si escribe caluquier cosa, lo mandamos a la pagina de inicio
  { path: '*', redirect: '/'},
];

// Es un ejemplo de como agregamos SubRutas.
const rutasHijas = [
  { path: '', component: InicioPage },
  { path: '/usuarios', component:  UsuariosPage, children: [
    // Agregamos SubRutas a partir de /usuarios/4
    { path: ':id', component: InfoUserPage, name: 'infoUsuario' }
  ] }
];