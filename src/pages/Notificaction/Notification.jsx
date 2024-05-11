import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";
import { code } from "./const";

export default function Notification(){
    return(
        <Layout>
            <Title>React Push Notification</Title>
            <TitleDescription>Las notificaciones en el navegador pueden avisar al usuario de cualquier novedad</TitleDescription>
            <SubTitle>Instalar librería</SubTitle>
            <ExtraText>Usa el siguiente comando:</ExtraText>
            <Code code={code.i}/>
            <SubTitle>Implementar notificación</SubTitle>
            <ExtraText>El siguiente codigo es un ejemplo de como usar la librería</ExtraText>
            <Code code={code.not}/>
        </Layout>
    )
}