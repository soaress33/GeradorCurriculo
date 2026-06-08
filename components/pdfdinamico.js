'use client';
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const estilos = StyleSheet.create({
  pagina: {
    padding: 40,
    backgroundColor: "#f5f5f5",
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
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 58,
    flexDirection: "row",
    gap: 50,

  },



  quadrado1: {
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    marginBottom: 58,
    flexDirection: "row",


  },


  circulo: {
    width: 50,
    height: 50,
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

  retanguloGG: {
    display: "flex",
    border: 2,
    borderColor: "#444",

  },

  linhaElementos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  box: {
    borderWidth: 1,
    borderColor: "blue",
    flexDirection: "row",
    padding: 10,
    gap: 5,
    borderRadius: 6,
    textAlign: "center",
    marginBottom: 50,
  },


  box3: {
    borderWidth: 1,
    borderColor: "yellow",
    flexDirection: "row",
    borderRadius: 6,
    textAlign: "center",
    marginBottom: 50,
  },



  box00: {
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
    textAlign: "center",

  },

  box1: {
    borderWidth: 1,
    borderColor: "#666",
    padding: 10,
    borderColor: "blue",
    borderRadius: 6,
    textAlign: "center",
    flexDirection: "row",
    padding: 20,
    marginBottom: 18,

  },




  box2: {
    borderWidth: 1,
    borderColor: "orange",
    padding: 10,
    borderRadius: 6,
    textAlign: "center",
    flexDirection: "row",
    padding: 20,
    gap: 18,

  },

  texto: {
    fontSize: 11,
    textAlign: "center",
  },
});

export default function PDFelementos() {
  return (
    <Document>
      <Page size="A4" style={estilos.pagina}>
        <View style={estilos.card}>

          <View style={estilos.quadrado}>


            <View style={estilos.box0}>
              
              <View style={estilos.box3}>
                <View style={estilos.box}>
                  <View style={estilos.quadrado1}></View>
                  <View style={estilos.quadrado1}></View>
                </View>

                <View style={estilos.box}>
                  <View style={estilos.quadrado1}></View>
                  <View style={estilos.quadrado1}></View>
                </View>
              </View>




            </View>


            <View style={estilos.box2}>
              <View style={estilos.circulo}></View>
              <View style={estilos.circulo}></View>
              <View style={estilos.circulo}></View>
            </View>

          </View>






        </View>
      </Page>
    </Document>
  );
}

