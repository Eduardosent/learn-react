import { Code, ExtraText, SubTitle, Title } from "../../components";
import Layout from "../../layout/Layout";
import {useTranslation} from 'react-i18next'
import { code } from "./constants";

export default function Create(){

    const {t} = useTranslation('global')
    return(
        <Layout>
            <Title>{t('create.title')}</Title>
            <SubTitle>Comando para crear proyecto</SubTitle>
            <ExtraText>En la terminal desde el directorio donde estará tu proyecto ejecuta el siguiente comando para crearlo:</ExtraText>
            <Code code={code.create}/>
            <ExtraText>En la misma terminal te pedirá darle un nombre al proyecto y lo escribes</ExtraText>
            <ExtraText>Te preguntará con que Framework o librería quieres tu proyecto, entonces con las flechas de arriba a abajo y enter, seleccionas React</ExtraText>
            <ExtraText>Esperas que la terminal termine el proyecto y listo tienes tu primer proyecto creado</ExtraText>
            <SubTitle>Ejecuta el proyecto para visualizarlo</SubTitle>
            <ExtraText>Primero entra en el directorio de tu proyecto con : cd [seguido del nombre de tu proyecto]</ExtraText>
            <Code code={code.cd}/>
            <ExtraText>Instalas las dependencias necesarias para tu proyecto con el siguiente comando:</ExtraText>
            <Code code={code.install}/>
            <ExtraText>Para correr tu proyecto localmente ejecutas el siguiente comando dentro del directorio de tu proyecto:</ExtraText>
            <Code code={code.dev}/>
            <ExtraText>Esperas que se ejecute y te proporcionará un url local en la terminal, lo tocas con el mouse y tocas ctrl+click para que te lleve al proyecto y lo visualices en tu navegador</ExtraText>
            <ExtraText>Por defecto tu proyecto sera un contador y cuando presiones el botón el valor del contador incrementará</ExtraText>
            <SubTitle>Estructura de proyecto React</SubTitle>
            <ExtraText>en el archivo main.js se encontrará la configuración principal, importaciones de estilos, etc, el main retorna al componente App</ExtraText>
            <Code code={code.main}/>
            <ExtraText>el componente App.jsx viene con una aplicación contador, en otro momento crearemos nuestro propio contador, por el momento puedes eliminar todo el archivo y copiar el siguiente código.</ExtraText>
            <Code code={code.app}/>
            <ExtraText>Como puedes ver tu aplicación solo retorna un texto centrado, React es una combinación de html y js, pero estructurado por medio de Componentes, puedes intentar cambiar algunas cosas como agregar más elementos html dentro del div</ExtraText>
            <SubTitle>Listo tienes tu aplicación React creada, sigue los siguientes artículos para dominar esta tecnología</SubTitle>
        </Layout>
    )
}