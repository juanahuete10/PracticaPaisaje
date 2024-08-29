import { Image, View, Text, StyleSheet} from 'react-native'
import React from 'react'

function Paisaje(props){
    return (
        <View>
            <Image style={styles.paisaje} source={props.imagen}/>
            <Text styles={styles.titulo}>{props.nombre} </Text>

    
       </View>
        
    );
}
export default Paisaje;
const styles = StyleSheet.create ({
    paisaje:{
        marginTop:10,
        borderRadius:8,
        width:300,
        heihgt:300,

    },
    titulo:{
        fontSize:12,
        fontWeight:'bold',
        color:'blue'

    }


});