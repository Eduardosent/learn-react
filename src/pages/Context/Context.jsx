import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";
import { code } from "./constants";

export default function Context(){
    return(
        <Layout>
            <Title>Usando el Context para manejar el Estado Global de la aplicación</Title>
            <TitleDescription>El contexto es una de las formas en las que manipular el estado, con el se puede compartir el estado a todos los componentes que el Provider envuelve en el arbol de omponentes</TitleDescription>
            <SubTitle>Crear el Contexto y el componente que lo proveerá</SubTitle>
            <ExtraText>Primero crea el contexto usando createContext y lo defines en una constante exportable para usarla luego, también creas el componente CounterProvider el cual retornará el CounterContext.Provider, colocamos children como prop y lo ponemos entre el CounterContext.Provider, ahora definimos que valores queremos que el contexto provea, en este caso definimos un estado de [counter,setCounter] y ambos los ponemos como valor en el CounterContext.Provider</ExtraText>
            <Code code={code.create}/>
            <SubTitle>Envuelve en el arbol de componentes a cuales quieres compartirles el contexto</SubTitle>
            <ExtraText>el CounterProvider debe envolver a todos los componentes a los que desee compartir la información, en este caso yo envuelvo al Router, el cual compartirá dicho contexto a todas las páginas que el Router envuelve</ExtraText>
            <Code code={code.wrap}/>
            <SubTitle>Usa el contexto</SubTitle>
            <ExtraText>Para usar el contexto que creamos, importamos useContext, dentro del componente donde lo usaremos en este caso Page, traemos la informacion del contexto, desestructuramos una constante e igualamos al useContext(CounterContext) el cual es el contexto que creamos, y listo ya estan disponibles para mandarlos a llamar tanto el counter como el setCounter</ExtraText>
            <Code code={code.use}/>
        </Layout>
    )
}