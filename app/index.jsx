import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import { Input } from "../components/input/input";

export default function Index() {
  return (
   <>
      {/*1. Logo + imagem de fundo */}
      <ImageBackground source={require('../assets/images/ImgFundo.png')} 
        style={styles.ImgFundo}>
          <Image source={require('../assets/images/LogoCEP.png')} style={styles.logo}></Image>
      </ImageBackground>
      {/* 2. Campo de consulta */}
      <View style={styles.container}>
        {/* 2.1. Titulo  */}
      <Text style={styles.titulo}>Consulte seu CEP</Text>
      {/* 2.2. input  */}
      <Input/>
      {/* 2.3. botao */}
      {/* 2.4. Card informacao */}
      </View>
   </>
  );
}

//Estilos dos meus componentes:
const styles = StyleSheet.create({
  ImgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  logo: {
    width: 100,
    height: 120
  },
  container:{
    flex: 1.5,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
    gap: 40
  },
  titulo:{
    fontSize: 25
  }

})