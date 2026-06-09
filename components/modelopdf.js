"use client";
 
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
 
const estilos = StyleSheet.create({
  pagina: { padding: 40 },
  nome: { fontSize: 24, color: "red" },
  cargo: { fontSize: 14, color: "green", marginBottom: 20 },
  texto: { fontSize: 12, marginBottom: 4 },
});
 
export default function PDF1({ dados }) {
  return (
    <Document>
      <Page size="A4" style={estilos.pagina}>
        <View>
          <Text style={estilos.nome}>{dados.nome}</Text>
          <Text style={estilos.cargo}>{dados.cargo}</Text>
          <Text style={estilos.texto}>{dados.email}</Text>
          <Text style={estilos.texto}>{dados.habilidades}</Text>
        </View>
      </Page>
    </Document>
  );
}