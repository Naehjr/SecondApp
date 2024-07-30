import { StyleSheet, Text, View,ImageBackground,SafeAreaView,ScrollView } from 'react-native'
import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';

 function Deposit({navigation}) {
  return (
    <SafeAreaView style={styles.Main}>
       
      <ImageBackground source={require('../../assets/background.jpeg')} style={{width:'100%',height:'100%'}}>
      <ScrollView>
        <View style={{width:100,height:100,backgroundColor:'blue',marginTop:50,alignSelf:'center'}}>
        </View>
        <FontAwesome6 name="flag-checkered" size={24} color="white" style={{alignSelf:'center   '}} />

      </ScrollView>
      </ImageBackground>
     
      
      
     
      
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Main: {
        backgroundColor: 'white',
        flex: 1,
      },
    
      MotherView: {
        
        justifyContent: 'center',
        marginTop: 30,
        paddingHorizontal:20
    
    
      },
})
export default Deposit