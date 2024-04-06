import { Components, Create, RouterPage, EnvPage, Internalization } from "../pages";

export const pages = [
    {name:'Crear primer proyeco de React', route:'/create', component:Create, level:1},
    {name:'Componentes de React', route:'/components', component:Components, level:1},
    {name:'Rutas en React', route:'/routes', component:RouterPage, level:1},
    {name:'Variables de entorno', route:'/env', component:EnvPage, level:1},
    {name:'Internalización o traducción en React', route:'/internalization', component:Internalization, level:2},
];