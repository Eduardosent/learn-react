import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";

export default function Libreries(){
    const icons = 'npm i react-icons'
    const social = 'npm i react-social-icons'
    const router = 'npm i react-router-dom'
    const marquee = 'npm i react-fast-marquee'
    const framer = 'npm i framer-motion'
    const i18next = 'npm i i18next'
    const zustand = 'npm i zustand'
    return(
        <Layout>
            <Title>Librerias útiles</Title>
            <TitleDescription>Las librerias son usadas para dieferenctes utilidades para simplificar el codigo que ya fue programado por otros desarrolladores, utilizarlas en lugar de crear las funcionalidades de 0, hace que el desarrollo sea más rápido</TitleDescription>
            <SubTitle>React Router Dom</SubTitle>
            <ExtraText>Libreria necesaria para administrar el enrutamiento de la aplicaión React</ExtraText>
            <Code code={router}/>
            <SubTitle>React Icons</SubTitle>
            <ExtraText>Libreria con muchos iconos que puedes utilizar en tu UI</ExtraText>
            <Code code={icons}/>
            <SubTitle>React Social Icons</SubTitle>
            <ExtraText>Libreria con iconos de Redes Sociales que puedes utilizar en tu UI</ExtraText>
            <Code code={social}/>
            <SubTitle>React Fast Marquee</SubTitle>
            <ExtraText>Para crear animación infinita de elemento que se mueven de un lado a otro</ExtraText>
            <Code code={marquee}/>
            <SubTitle>Framer Motion</SubTitle>
            <ExtraText>Crear animaciónes e interactividad a los elementos de la aplicación</ExtraText>
            <Code code={framer}/>
            <SubTitle>i18next</SubTitle>
            <ExtraText>Añadir internalización a tu aplicación</ExtraText>
            <Code code={i18next}/>
            <SubTitle>Zustand</SubTitle>
            <ExtraText>Librería para el manejo de los estados de la aplicación</ExtraText>
            <Code code={zustand}/>
        </Layout>
    )
}