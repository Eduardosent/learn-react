import { Code, ExtraText, SubTitle, Title } from "../../components";
import Layout from "../../layout/Layout";
import { code } from "./constants";

export default function Components(){
    return (
        <Layout>
            <Title>Componentes de React</Title>
            <SubTitle>Estructura de un React Component</SubTitle>
            <ExtraText>Los componentes de React estan conformados por una función que retorna una combinación entre js y html, eso es un componente, el html será la estructura y el js estará en la parte lógica</ExtraText>
            <Code code={code.comb}/>
            <ExtraText>En este ejemplo se ve como se divide la parte lógica de la parte visual del componente, la constante message esta siendo interpolada para mostrarla en la etiqueta h1, en la parte lógica creas tus variables y funciones y en la parte visual implementas la lógica y la editas para que se vea bien</ExtraText>
            <SubTitle>Tipos de componentes</SubTitle>
            <ExtraText>Esta es la estructura de un componente como función</ExtraText>
            <Code code={code.function}/>
            <ExtraText>Esta es la estructura de un componente en forma de función constante y también se ve como una función flecha:</ExtraText>
            <Code code={code.const}/>
            <ExtraText>Tu puedes usar la función de componente que más te guste</ExtraText>
            <ExtraText>Información adicional: [export] es para exportar la funcion y que otros archivos puedan usarla, [default] es para definir dicha función como la que llamaras por defecto cuando importes el archivo, luego declaras la función con el nombre empezando con mayúscula, dentro de la función retornas (dentro del parentesis) todo lo que será la parte visual, si agregas lógica lo haces dentro de la función pero fuera del return()</ExtraText>
            <SubTitle>Listo ahora sabes como crear tus propios componentes</SubTitle>
        </Layout>
    )
}
