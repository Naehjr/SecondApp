import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, Image,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Dashboard from './Dashboard';

function Lession() {
  return (
    <SafeAreaView style={styles.Main}>
        {/* the background image of the login phase */}
        <ImageBackground source={require('../../assets/LoginBackground.jpg')} style={{width:'100%', height:'100%'}}>
        <View style={styles.MotherView}>
        <ScrollView showsVerticalScrollIndicator={false}>

            {/* properties */}
            <View  style={styles.TextInputView}>
            <TextInput placeholder='Search' placeholderTextColor={'gray'} cursorColor={'black'} style={styles.InputText}/>
            </View>
            <View style={styles.Dashboard}>
                <Text style={styles.AccText}>Account Balance</Text>
                <Text style={styles.AmountText}>$100.00</Text>

            </View>


        </ScrollView>
        </View>
        </ImageBackground>


    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
    Main:{
        backgroundColor:'white',
        flex:1
    },

    MotherView:{
        padding:10
    },

    TextInputView:{
        borderRadius:10,
        width:'100%',
        backgroundColor:'white',
        marginTop:40,
        paddingVertical:12,
        borderWidth:0.5,
        borderColor:'blue'

    },

    InputText:{
        marginLeft:15,

    },

    Dashboard:{
        
    }
})

export default Lession