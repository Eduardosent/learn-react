import { useEffect, useState } from "react";
import { Code, ExtraText, SubTitle, Title, TitleDescription } from "../../components";
import Layout from "../../layout/Layout";
import { json } from "react-router-dom";
import { code } from "./const";

export default function  Fetch(){

    return(
        <Layout>
            <Title>Usando Fetch para peticiones Http</Title>
            <TitleDescription>Fetch es una función de javascript para realizar peticiones Http a API REST y gestionar sus utilidades</TitleDescription>
            <SubTitle>Get</SubTitle>
            <ExtraText>Para hacer una petición get solo necesitamos una función de fetch y pasar como parámetro la url de la petición Get, luego podemos usar then y catch para procesar los resultados de la siguiente manera, recuerda que la función sea asyncrona para que se siga ejecutando hasta que haya obtenido la respuesta</ExtraText>
            <Code code={code.get}/>
            <SubTitle>Post</SubTitle>
            <ExtraText>Para una patición Post, además del endpoint url post es necesario agregar el segundo parametro el cual sera un objeto con el tipo de method, body para el nuevo elemento a crear y el header para indicar en que formato se envia asi como en el siguiente ejemplo:</ExtraText>
            <Code code={code.post}/>
            <SubTitle>Put</SubTitle>
            <ExtraText>En una petición put también enviamos primer parametro la url del elemento a actualizar,segundo parametro con el method, body y headers, la diferencia es que la información que enviemos servira para actualizar en lugar de crear.</ExtraText>
            <Code code={code.put}/>
            <SubTitle>Delete</SubTitle>
            <ExtraText>Para la petición Delete solo necesitamos la Url del elemento con el id a eliminar, no es necesario enviar un body pero si indicar el tipo de petición delete</ExtraText>
            <Code code={code.del}/>
            <SubTitle>Cómo Mapear un arreglo</SubTitle>
            <ExtraText>la función map sirve para iterar cada uno de los elementos obtenidos de un arreglo y es muy común uarlo para mostrar la información obtenida de una petición Get</ExtraText>
            <Code code={code.map}/>
        </Layout>
    )
}