import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";
import { code } from "./constants";

export default function Zustand(){
    return(
        <Layout>
            <Title>Maneja el Estado Global usando Zustand</Title>
            <TitleDescription>Zustand es la libreria mas simple para manejar el estado global de la aplicación sin tener que usar Providers, puede guardar y persistir la información de los Estados y las funciones para manejar los mismos</TitleDescription>
            <SubTitle>Primero instala la libreria usando el siguiente comando:</SubTitle>
            <Code code={code.install}/>
            <SubTitle>Crea tu store, donde guardas la informacion y las funciones que compartiras a los componentes de la aplicacion donde los necesites</SubTitle>
            <ExtraText>importa create desde zustand, luego define una constante la cual sera el store donde vas a definir los estados y funciones, set() lo usas para setear un valor y state para acceder a los estados del store</ExtraText>
            <Code code={code.store}/>
            <SubTitle>Para usar la información, del estado o llamar las funciones simplemente llamas la constante que definiste y accedes a su estado y nombre del elemento</SubTitle>
            <ExtraText>para acceder a los estados simplemente define una variable y manda a llamar la constante que creaste como el store, en este caso bearStore(), accede a sus estados usando state</ExtraText>
            <Code code={code.use}/>
            <SubTitle>Felicidades ya puedes usar Zustand como gestor de Estados</SubTitle>
        </Layout>
    )
}