import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";
import { code } from "./constants";

export default function RouterPage(){
    const element = '<Home/>'
    const a = '<a href="/">Home</a>'
    const link = '<Link to="/">Home<Link>'
    return (
        <Layout>
            <Title>Enrutamiento en React</Title>
            <TitleDescription>El enrutador nos sirve para actualizar las páginas más rapidamente y gestinar las rutas, generar rutas dinámicas,etc</TitleDescription>
            <SubTitle>En React</SubTitle>
            <SubTitle>Instala react-router-dom</SubTitle>
            <ExtraText>Coloca el siguiente comando en la terminal para instalarlo</ExtraText>
            <Code code={code.install}/>
            <SubTitle>Crear el Enrutador</SubTitle>
            <ExtraText>importa BrowserRouter ,Routes, Route, Navigate de react-router-dom, crea un componente el cual será el enrutador en este caso es Router, haz que retorne BrowserRouter, el cual envolverá a Routes, dentro de Routes define cada una de las rutas que vas a usar, el primer Router '*' sirve para redireccionar al '/' en caso el usuario entre a una ruta que no exista, será enviado al Home '/', luego esta la ruta '/' y '/another', el componente Route recibe dos parametros, el path de la ruta '/' y el component el cual debe ser una página que hayas creado como Home, tambien es valido usar element en lugar de Component, osea podrías poner {element} en lugar de Home.</ExtraText>
            <ExtraText>Para crear una ruta dinámica solo necesitas agregar en el path '/route/:param' es decir colocar dos puntos despues de la ruta y colocar el nombre del parametro al final como en el cuarto Route de este ejemplo</ExtraText>
            <Code code={code.router}/>
            <SubTitle>Usar Link component</SubTitle>
            <ExtraText>importa Link de react-router-dom y usalo en lugar de {a}, usandoló asi {link}</ExtraText>
            <Code code={code.link}/>
            <SubTitle>Acceder al parametro de una ruta dinámica</SubTitle>
            <ExtraText>importa useParams de react-router-dom, y destructuras llamando al nombre del parámetro de esa página en este caso id, así obtienes el valor de un parámetro, por ejemplo si usas la ruta '/product/2' el valor del id será 2</ExtraText>
            <Code code={code.params}/>
            <SubTitle>Redireccionar desde una función</SubTitle>
            <ExtraText>importas use Navigate de react-router-dom lo defines en una variable, y la llamas como una función cuyo parámetro será la ruta de la otra página, de esta forma pueder redirigir a travéz de una función</ExtraText>
            <Code code={code.redirect}/>
            <SubTitle>Listo ya aprendiste a enrutar en React</SubTitle>
            <SubTitle>En Next</SubTitle>
        </Layout>
    )
}