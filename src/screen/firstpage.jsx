import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

function Firstpage() {
    return (
        // parent view
        <SafeAreaView style={styles.Main}>
            <View style={styles.MotherContainer}>
                <ScrollView>
                
                <View style={styles.TextInputView}>
                <MaterialIcons name="search" size={20} color="black" style={{marginHorizontal:10}} />
                    <TextInput placeholder='Search' placeholderTextColor='gray' cursorColor='#000000' style={styles.TextInput}/>
                </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Main: {
        backgroundColor: '#FAFAFA',
        flex: 1,
    },
    MotherContainer: {
        padding: 20,
    
        marginTop: 20
    },
    TextInputView: {
        backgroundColor: 'white',
        paddingVertical:10,
        width:'100%',
        borderRadius:10,
        borderColor:'gray',
        borderWidth:0.5,
        flexDirection:'row'
    },
    SearchText: {
        fontSize: 20,
        color: 'black',
        fontFamily:'gilroy-bold'
    },
TextInput:{
   
    width:200
}
})

export default Firstpage