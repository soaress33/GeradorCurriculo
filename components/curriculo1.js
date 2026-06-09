
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
 
const estilos = StyleSheet.create({
  pagina: { 
    backgroundColor: "white",
     borderRadius: 0,
  },
 
  card: {
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 12,
    padding: 20,
    backgroundColor: "#fff",
  },
 
  tituloPrincipal: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "bold",
  },
 
  linha: {
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    marginVertical: 10,
  },
 
  quadrado: {
    borderWidth: 2,
    borderColor: "#444",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
 
  circulo: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: "#444",
    backgroundColor: "#d9d9d9",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
 
  titulo: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
 
  secao: {
    marginTop: 15,
  },
 
  linhaElementos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
 
  box: {
    width: "30%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#143B38",
    backgroundColor: "#143B38",
    padding: 10,
    borderBottomLeftRadius: 5,
    textAlign: "center",
  },

    box1: {
    width: "30%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#666",
    padding: 10,
    borderRadius: 6,
    textAlign: "center",
  },
 
  texto: {
    fontSize: 11,
    textAlign: "center",
  },
});
 
export default function Curriculo1() {
  return (
    <Document>
      <Page size="A4" style={estilos.pagina}>
        <View style={estilos.box}></View>
        

        
      </Page>
    </Document>
  );
}
 
 