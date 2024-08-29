import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import Paisaje from './Componentes/Paisaje';


export default function App() {
  return (
    <View style={styles.container}>
  
      <Text style={styles.tituloText}>Galeria Paisajes</Text>
     
      <ScrollView>
        
         <Paisaje
              nombre='Un Bello Atardecer'
              imagen={require('./Imagenes/Paisaje1.jpg')}
      ></Paisaje>
      

      <Paisaje 
              nombre='Nieve'
              imagen={require('./Imagenes/descarga.jpg')}
      ></Paisaje>


      <Paisaje
             nombre='Montañas'
             imagen={require('./Imagenes/paisaje2.jpg')}

      ></Paisaje>

      <Paisaje
      nombre='Globos'
      imagen={require('./Imagenes/Paisaje3.jpg')}
      ></Paisaje>

      <Paisaje
      nombre='Atardecer'
      imagen={require('./Imagenes/Paisaje4.jpg')}
      ></Paisaje>


<Paisaje
      nombre='Amanecer'
      imagen={require('./Imagenes/paisaje5.jpg')}
      ></Paisaje>

<Paisaje
      nombre='Atardecer'
      imagen={require('./Imagenes/Paisaje6.jpg')}
      ></Paisaje>

<Paisaje
      nombre='Atardecer'
      imagen={require('./Imagenes/paisaje7.jpg')}
      ></Paisaje>

<Paisaje
      nombre='Playa'
      imagen={require('./Imagenes/paisaje8.jpg')}
      ></Paisaje>

<Paisaje
      nombre='San Juan del sur'
      imagen={require('./Imagenes/paisaje9.jpg')}
      ></Paisaje>




      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText:{
    fontSize:25,
    fontWeight: 'bold',
  },
});
