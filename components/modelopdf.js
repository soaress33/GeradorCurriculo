// Importamos as peças que vamos usar

import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";



const estilos = StyleSheet.create({

  pagina: { padding: 40 }, // espaço interno da folha

  nome: { fontSize: 24, color: "red"}, // tamanho do nome
    
  cargo: { fontSize: 14, color: "green", marginBottom: 20 },

  texto: { fontSize: 12, marginBottom: 4 }, // linhas de contato

});

// Componente que descreve o nosso PDF

export default function CurriculoSimples() {

  return (

// Document = o arquivo PDF inteiro
<Document>

{/* Page = uma página A4 */}
<Page size="A4" style={estilos.pagina}>

{/* View = uma caixa, como a div do HTML */}
<View>

{/* Text = todo texto fica dentro de um Text */}
<Text style={estilos.nome}>Neymar Júnior </Text>
<Text style={estilos.cargo}>Copa 2026</Text>
<Text style={estilos.texto}>Email: neymar@email.com</Text>
<Text style={estilos.texto}>Telefone: (35) 9 2222-1111</Text>
<Text style={estilos.texto}>Cidade: Lavras, MG</Text>
</View>
</Page>
</Document>

  );

}
