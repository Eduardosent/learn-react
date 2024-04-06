import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";
import { code } from "./code";

export default function EnvPage(){
    return(
        <Layout>
            <Title>Variables de Entorno en React</Title>
            <TitleDescription>Las Variables de Entorno en un proyecto sirven para guardar información que no debe ser expuesta publicamente ya que allí se guarda el acceso a bases de datos, u otros servicios</TitleDescription>
            <SubTitle>Agregar Variables de entorno en React u otra librería que use Vite</SubTitle>
            <ExtraText>Crea archivo .env y agrega cada variable empezando con VITE_[nombre de la variable]:</ExtraText>
            <Code code={code.envVitefile}/>
            <ExtraText>Desde cualquier archivo del proyecto obten el valor de las env con import.meta.env.[seguido del nombre de la variable]:</ExtraText>
            <Code code={code.envViteGet}/>
            <SubTitle>Agregar Variables de entorno en Next.js</SubTitle>
            <ExtraText>Crea archivo .env.local y agrega cada variable empezando con NEXT_PUBLIC_[nombre de la variable] :</ExtraText>
            <Code code={code.envNextFile}/>
            <ExtraText>Desde cualquier archivo del proyecto obten el valor de las env con process.env.[seguido del nombre de la variable]:</ExtraText>
            <Code code={code.envNextGet}/>
            <ExtraText>Recuerda volver a ejecutar la aplicación con [npm run dev] si no cargaron las env inmediatamente</ExtraText>
        </Layout>
    )
}