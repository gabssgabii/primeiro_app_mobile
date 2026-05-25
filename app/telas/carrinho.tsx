import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function Carrinho() {
    return <>
        <Image source={require('../../assets/images/produtos/alexa.webp')} style={estilo.imagemTopo}/>
        <View>
            <Text style={estilo.titulo}>Carrinho de Compras</Text>
            <Text style={estilo.nome}>Nome: Alexa IA</Text>
            <Text style={estilo.descricao}>Descricao: Um produto tecnologico para sua casa.</Text>
        </View>
     </>
}
const estilo = StyleSheet.create({
    imagemTopo: {
        width: "90%",
        height: "40%",
    },
    titulo: {
        color: "#f9f9f9",
        fontSize: 30,
        fontWeight: "800",
        lineHeight: 42,
    },
    nome: {
        color: "#f9f9f9",
        fontSize: 16,
        lineHeight: 26,
    },
    descricao:{
        color: "#f9f9f9",
        fontSize: 16,
        lineHeight: 26,
    }

});