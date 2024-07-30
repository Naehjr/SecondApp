import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

function Onboarding({navigation}) {
  return (
    <SafeAreaView style={styles.Main}>
      <View style={styles.MotherView}>

        {/* Logo */}
        <Image source={require('../../assets/Logo.png')} style={styles.Logo} />

        {/* Write ups */}
        <Text style={{ textAlign: 'center', paddingTop: 70, fontFamily: 'gilroy-bold', fontSize: 22 }}>Welcome to the app</Text>
        <Text style={{ textAlign: 'center', paddingTop: 20, fontFamily: 'gilroy-regular', fontSize: 15, marginBottom: 10 }}>We're exited to help you book and manage</Text>
        <Text style={{ textAlign: 'center', paddingTop: 3, fontFamily: 'gilroy-regular', fontSize: 15, marginBottom: 10 }}>your services appointment with ease</Text>

        {/* scroll indicator */}
        <View style={{ flexDirection: 'row', width: 50, height: 20, justifyContent: 'space-between', alignSelf: 'center', marginTop: 30 }}>
          <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: '#2F4EFF' }}></View>
          <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: '#D9D9D9' }}></View>
          <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: '#D9D9D9' }}></View>
        </View>

        {/* botton */}
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{ width: 300, height: 50, borderRadius: 23, alignSelf: 'center', backgroundColor: '#2F4EFF', justifyContent: 'center', marginVertical: 50 }}>
          <Text style={{ color: '#FFFFFF', fontFamily: 'gilroy-bold', fontSize: 16, alignSelf: 'center' }}>Login</Text>
        </TouchableOpacity>

        {/* create account */}
        <TouchableOpacity>
          <Text style={{ color: '#2F4EFF', fontFamily: 'gilroy-bold', fontSize: 16, alignSelf: 'center' }}>Create an account</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  MotherView: {
    paddingHorizontal: 20
  },
  Logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: 30
  }
})
export default Onboarding