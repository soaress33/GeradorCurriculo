"use client";

import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const estilos = StyleSheet.create({
  pagina: { padding: 40 },
  nome: { fontSize: 24, color: "red" },
  cargo: { fontSize: 14, color: "green", marginBottom: 20 },
  texto: { fontSize: 12, marginBottom: 4 },
});

export default function CurriculoSimples() {
  return (
    <Document>
      <Page size="A4" style={estilos.pagina}>
        <View>
          <Text style={estilos.nome}>Neymar Júnior</Text>
          <Text style={estilos.cargo}>Copa 2026</Text>
          <Text style={estilos.texto}>Email: neymar@email.com</Text>
          <Text style={estilos.texto}>Telefone: (35) 9 2222-1111</Text>
          <Text style={estilos.texto}>Cidade: Lavras, MG</Text>
        </View>
      </Page>
    </Document>
  );
}
