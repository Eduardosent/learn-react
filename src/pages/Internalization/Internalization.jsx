import { Code, ExtraText, SubTitle, Title } from '../../components'
import Layout from '../../layout/Layout'
import { code } from './constants'

export default function Internalization(){
    return(
        <Layout>
            <Title>Internalización en React usando i18next</Title>
            <SubTitle>Instalación</SubTitle>
            <ExtraText>Primero instala las siguientes dependencias de i18next: (son para npm, si usas pnpm,yarn,bun, busca en su documentación)</ExtraText>
            <Code code={code.installDep}></Code>
            <SubTitle>Crear los archivos con las traducciones</SubTitle>
            <ExtraText>Para este ejemplo se usara la traducción en inglés y en español, en src crea una carpeta llamada transaltions y en ella crea las carpetas en y es, en cada una su respectivo global.json con la siguiente estructura:</ExtraText>
            <Code code={code.files}/>
            <ExtraText>En el archivo en/global.json escribe este objeto json con sus claves y valor:</ExtraText>
            <Code code={code.enjson}/>
            <ExtraText>En el archivo es/global.json escribe este objeto json con sus claves y valor:</ExtraText>
            <Code code={code.esjson}/>
            <SubTitle>Configuración y Provider de i18next</SubTitle>
            <ExtraText>Copia y pega el siguiente codigo en tu main.js envolviendo el App con el Provider de i18next y agregando los archivos con las traducciones, entre otras configuraciones</ExtraText>
            <Code code={code.config}/>
            <SubTitle>Usando la internalización</SubTitle>
            <ExtraText>Podrás usar las traducciones por medio de una interpolación en un elemento de tipo text como el h1 y llamas la función t('clave.clave') con las claves que se encuentran en los global.json</ExtraText>
            <ExtraText>Además cambiar las traducciones que utilizas por medio de la función i18n.changeLanguage('traducción[en este caso 'en' o 'es']'):</ExtraText>
            <Code code={code.using}/>
            <SubTitle>Listo, asi implementas i18next para tu aplicación web multi idioma</SubTitle>
        </Layout>
    )
}