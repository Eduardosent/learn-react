import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";
import { code } from "./constants";

export default function ZustandPersist(){
    return(
        <Layout>
            <Title>Persiste estados y guardalos localmente usando Zustand</Title>
            <TitleDescription>Con Zustand también puedes persistir la información, lo que quiere decir que aún si recargas la página los estados se almacenaran localmente y esa informacion no se perderá</TitleDescription>
            <SubTitle>Si no tienes instalada la libreria, la instalas con el siguiente comando:</SubTitle>
            <Code code={code.install}/>
            <SubTitle>Crea tu store, donde guardas la informacion y las funciones que compartiras a los componentes de la aplicacion donde los necesites, importa persist y createJSONStorage de zustand/middleware para lograr persistir la información</SubTitle>
            <ExtraText>importa create desde zustand, luego define una constante la cual sera el store donde vas a definir los estados y funciones, set() lo usas para setear un valor y get() para acceder a los estados del store, importa persist y createJSONStorage de zustand/middleware, coloca persist dentro de create, como primer parametro de persist crea una función con get()  y set(), creas los estados y funciones, como segundo parametro define un objeto con el name y storage de tu store</ExtraText>
            <Code code={code.store}/>
            <SubTitle>Para usar la información, del estado o llamar las funciones simplemente llamas la constante que definiste y accedes a su estado y nombre del elemento</SubTitle>
            <ExtraText>para acceder a los estados simplemente define una variable y manda a llamar la constante que creaste como el store, en este caso useBearStore(), accede a sus estados usando state</ExtraText>
            <Code code={code.use}/>
            <SubTitle>Felicidades ya puedes persistir estados usando Zustand</SubTitle>
        </Layout>
    )
}