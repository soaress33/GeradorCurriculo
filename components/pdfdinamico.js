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

  cartrilho: {
    borderWidth: 2,
    borderColor: "black",
    width: "100%",
    height: "200px",
    padding: 20,
    gap: 20,

  },





  linha: {
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    marginVertical: 10,
  },

  quadrado: {
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    flexDirection: "row",
    padding: 20,
    gap: 40,

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
    width: 35,
    height: 35,
    borderWidth: 2,
    borderColor: "#444",
    backgroundColor: "#d9d9d9",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },


  quadrado1: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "#444",
    backgroundColor: "#d9d9d9",

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


  cardTrilhas: {

    borderWidth: 2,
    borderColor: "black",
    width: "100%",
    height: 300,
    borderRadius: 10,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",

  },

  trilha: {
    height: 9,
    backgroundColor: "#E4E4E7",
    borderRadius: 5,

  },

  trilhafund1: {

    height: 9,
    width: "90%",
    backgroundColor: "red",
    borderRadius: 5,

  },

  trilhafund2: {

    height: 9,
    width: "60%",
    backgroundColor: "red",
    borderRadius: 5,

  },

  trilhafund3: {

    height: 9,
    width: "40%",
    backgroundColor: "red",
    borderRadius: 5,

  },


  cxtrilha1: {
    borderWidth: 2,
    borderColor: "black",

  },

  cxtrilha2: {
    borderWidth: 2,
    borderColor: "black",

  },

  cxtrilha3: {
    borderWidth: 2,
    borderColor: "black",

  },

  cxtrilha4: {
    borderWidth: 2,
    borderColor: "black",

  },

  trilhafund4: {

    height: 9,
    width: "25%",
    backgroundColor: "red",
    borderRadius: 5,

  },

  protrilho: {
    height: 20,
    width: "70%",
    borderWidth: 2,
    borderColor: "black",

  },

  caixa: {
    borderWidth: 2,
    borderColor: "black",
    gap: 10,
    padding: 20,
    marginBottom: 18,

  },

    cxlinha: {
    borderWidth: 2,
    borderColor: "black",
    gap: 10,
    padding: 20,
    marginBottom: 2,

  },

  

  linhaElementos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  box: {
    borderWidth: 1,
    borderColor: "red",
    flexDirection: "row",
    gap: 15,
    borderRadius: 6,
    textAlign: "center",
    marginBottom: 50,
  },

  box0: {
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    borderRadius: 6,
    textAlign: "center",
    marginBottom: 50,
  },



  box3: {
    borderWidth: 1,
    borderColor: "yellow",
    borderRadius: 6,
    textAlign: "center",
    marginBottom: 50,
  },



  box00: {

    gap: 20,
    textAlign: "center",
    flexDirection: "row",

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

  GG: {
    borderWidth: 1,
    borderColor: "pink",
    height: 150,
    width: "50%",
    padding: 10,
    gap: 15,
    alignItems: "center",
    borderRadius: 10,
    textAlign: "center",

  },

  cxtxt1: {
    borderWidth: 1,
    borderColor: "black",
    height: 110,
    width: "50%",
    padding: 10,
    textAlign: "left",

  },

  cxtxt2: {
    borderWidth: 1,
    borderColor: "black",
    height: 110,
    width: "50%",
    textAlign: "left",

  },

  cxtxt3: {
    borderWidth: 1,
    borderColor: "black",
    height: 110,
    width: "50%",
    textAlign: "left",

  },




  box2: {
    borderWidth: 1,
    borderColor: "orange",
    padding: 10,
    borderRadius: 6,
    textAlign: "center",
    flexDirection: "row",
    gap: 30,
  
    height: 150,
    alignItems: "center",

  },

  texto: {
    fontSize: 11,
    color: "black",
  },

  texto1: {
    fontSize: 11,
    color: "black",

  },

  linha1: {

    height: 4,
    backgroundColor: "#0d9488",
    borderRadius: 2,

  },

  linha2: {

    height: 4,
    backgroundColor: "yellow",
    borderRadius: 2,

  },

  linha3: {

    height: 4,
    backgroundColor: "blue",
    borderRadius: 2,

  },




});

export default function PDFelementos() {
  return (
    <Document>
      <Page size="A4" style={estilos.pagina}>
        <View style={estilos.card}>
          <View style={estilos.quadrado}>
            <View style={estilos.GG}>
              <View style={estilos.box00}>
                <View style={estilos.quadrado1}></View>
                <View style={estilos.quadrado1}></View>
              </View>

              <View style={estilos.box00}>
                <View style={estilos.quadrado1}></View>
                <View style={estilos.quadrado1}></View>
              </View>

            </View>


            <View style={estilos.box2}>
              <View style={estilos.circulo}></View>
              <View style={estilos.circulo}></View>
              <View style={estilos.circulo}></View>
            </View>
          </View>


          <View style={estilos.caixa}>

          
              <Text style={estilos.texto}></Text>
              <View style={estilos.trilha}>
                <View style={estilos.trilhafund1} />
              </View>
           

            
              <View style={estilos.trilha}>
                <View style={estilos.trilhafund2} />
              </View>
          

           
              
              <View style={estilos.trilha}>
                <View style={estilos.trilhafund3} />
              </View>


              <View style={estilos.trilha}>
                <View style={estilos.trilhafund4} />
              </View>
            

          </View>

          <View style={estilos.quadrado}>
            <View style={estilos.cxtxt1}>
              <Text style={estilos.texto1}>A Copa do Mundo de 2026
                acontece de 11 de junho a 19 de julho. Pela primeira vez,
                o torneio será realizado em três países-sede: Canadá, Estados
                Unidos e México. Esta será também a maior edição da história,
                marcando a estreia do novo formato com 48 seleções
                e um total de 104 partidas.</Text>
            </View>

            <View style={estilos.cxtxt2}>
              <Text style={estilos.texto1}>

                O futebol se popularizou internacionalmente através das Olimpíadas
                no início do século XX. Para criar um torneio independente, a FIFA
                idealizou a primeira Copa do Mundo, sediada e
                vencida pelo Uruguai em 1930, que derrotou a Argentina na final.

              </Text>
            </View>
          </View>

          <View style={estilos.quadrado}>
            <View style={estilos.cxtext3}>
              <Text style={estilos.texto1}>

                O futebol se popularizou internacionalmente através das Olimpíadas
                no início do século XX. Para criar um torneio independente, a FIFA
                idealizou a primeira Copa do Mundo, sediada e
                vencida pelo Uruguai em 1930, que derrotou a Argentina na final.

              </Text>
            </View>
          </View>


          <View style={estilos.cxlinha}>
            <View style={estilos.linha1}></View>

            <View style={estilos.linha2}></View>

            <View style={estilos.linha3}></View>

          </View>











        </View>
      </Page>
    </Document>
  );
}

