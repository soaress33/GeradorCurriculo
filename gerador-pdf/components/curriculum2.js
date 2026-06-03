// Importamos as peças que vamos usar

import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";




const estilos = StyleSheet.create({

  pagina: { padding: 40 }, // espaço interno da folha

  nome: { fontSize: 24, color: "white", fontWeight: "bold" }, // tamanho do nome
    
  cargo: { fontSize: 14, color: "orange", marginBottom: 20 },

  texto: { fontSize: 12, marginBottom: 4 }, // linhas de contato

});

// Componente que descreve o nosso PDF

export default function Curriculo1() {

  return (

// Document = o arquivo PDF inteiro
<Document>

{/* Page = uma página A4 */}
<Page size="A4" style={estilos.pagina}>

{/* View = uma caixa, como a div do HTML */}
<View>
  <View style={{backgroundColor: 'green', width: '1000', height: 100, padding: 6, }}>
    <Text style={estilos.nome }>Ana Beatddriz Oliveira </Text>
    <Text style={estilos.cargo}>Jovem Aprendiz</Text>
    <View style={{backgrondColor: 'black', width: '100%',   display: 'flex',   margin: 10 }}>
       <Text style={estilos.cargo}>
        Jovem Aprendiz
        Jovem Aprendiz
        Jovem Aprendiz
       </Text>
       
    </View>
    </View>  

{/* Text = todo texto fica dentro de um Text */}

<Text style={estilos.cargo}>Copadasadsa d2026</Text>
<Text style={estilos.texto}>Emaidl: mazolaaasdasda</Text>
<Text style={estilos.texto}>Telefone: (35) 9 2223131312312-1111</Text>
<Text style={estilos.texto}>Cidade: Lavrdsasdasasdas, MG</Text>
</View>
</Page>
</Document>

  );

}
