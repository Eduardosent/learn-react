import { Code, ExtraText, SubTitle, Title, TitleDescription } from '../../components'
import Layout from '../../layout/Layout'
import { code } from './const'

export default function Payments(){
    return(
        <Layout>
            <Title>Librerias de Pago</Title>
            <TitleDescription>Agregar metodos de procesamientos de pago a una aplicación podría servir para un ecommerce y entre otras aplicaciones</TitleDescription>
            <SubTitle>Google Pay</SubTitle>
            <SubTitle>Instalar librería con el siguiente comando</SubTitle>
            <Code code={code.igp}/>
            <ExtraText>Crear componente de Google Pay</ExtraText>
            <Code code={code.gpcomp}/>
            <SubTitle>Stripe</SubTitle>
            <SubTitle>Instalar librería con el siguiente comando</SubTitle>
            <Code code={code.is}/>
            <ExtraText>Crear componente Stripe</ExtraText>
            <Code code={code.scomp}/>
        </Layout>
    )
}