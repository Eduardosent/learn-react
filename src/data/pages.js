import { Components, Create, RouterPage, EnvPage, Internalization, Zustand, ZustandPersist, Context, Websockets, Libreries } from "../pages";

export const pages = [
    {name:'Crear primer proyeco de React', route:'/create', component:Create, level:1},
    {name:'Componentes de React', route:'/components', component:Components, level:1},
    {name:'Rutas en React', route:'/routes', component:RouterPage, level:1},
    {name:'Variables de entorno', route:'/env', component:EnvPage, level:1},
    {name:'Internalización o traducción en React', route:'/internalization', component:Internalization, level:2},
    {name:'Context de React', route:'/context', component:Context, level:2},
    {name:'Gestor de Estados Global Zustand', route:'/zustand', component:Zustand, level:2},
    {name:'Persiste Estados con Zustand', route:'/zustandPersist', component:ZustandPersist, level:2},
    {name:'Websockets', route:'/websockets', component:Websockets, level:3},
    {name:'Libraries', route:'/libraries', component:Libreries, level:4},
];