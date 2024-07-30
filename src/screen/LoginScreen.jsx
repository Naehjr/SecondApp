import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import React,{useState} from 'react';
import { AntDesign,Feather } from '@expo/vector-icons';

function LoginScreen({ navigation,value, onChangeText  }) {

    const [secureTextEntry, setSecureTextEntry] = useState(true);
  
    const toggleSecureEntry = () => {
      setSecureTextEntry(!secureTextEntry);
    };

    const [checked, setChecked] = useState(false);

    const toggleIcon = () => {
      setChecked(!checked);
    };
  return (
    <SafeAreaView style={styles.Main}>
      <View style={styles.MotherView}>

        {/* Write up on the screen */}
        <Text style={styles.LoginText}>Login</Text>
        <Text style={styles.WelcomeText}>Welcome back to the app</Text>
        <Text style={styles.EmailText}>Email Address</Text>

        {/* text input */}

        <View style={styles.TextInputView}>
          <TextInput placeholder='hello@example.com' placeholderTextColor={'#B3B1C0'} cursorColor='000000' style={styles.TextInput} />
        </View>

        <View style={styles.PassView}>

          <Text style={styles.PasswordText}>Password</Text>

          <TouchableOpacity onPress={() => navigation.navigate()}>
            <Text style={styles.ForgotText}>Forgot Password?</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.TextInputView}>
          <TextInput 
          style={styles.TextInput}
          secureTextEntry={secureTextEntry}
          value={value}
          keyboardType='default'
          onChangeText={onChangeText}
          placeholder="Enter Password" />
          <TouchableOpacity onPress={toggleSecureEntry} style={{ padding: 10 }}>
        <Feather name={secureTextEntry ? 'eye-off' : 'eye'} size={20} color="black" />
      </TouchableOpacity>
        </View>

        <View style={styles.MainCheckView}>
        <TouchableOpacity onPress={toggleIcon}>
      {checked ? (
        <AntDesign name="checksquare" size={20} color='#2F4EFF' />
      ) : (
        <AntDesign name="checksquareo" size={20} color='#2F4EFF' />
      )}
    </TouchableOpacity>

          <Text style={styles.KeepText}>Keep me signed in</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('thirdpage')} style={styles.LoginView}>
          <Text style={styles.LoginText1}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.SignText}>or sign in with</Text>

        <View style={styles.GoogleView}>
          <Image source={require('../../assets/LogoGoogle.png')} style={styles.LogoGoogle} />
          <Text style={styles.ContinueText}>Continue with Google</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate()}>
          <Text style={styles.CreateText}>Create an account</Text>
        </TouchableOpacity>



      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  Main: {
    backgroundColor: 'white',
    flex: 1,
  },

  MotherView: {
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 30,
    paddingHorizontal:20


  },

  LoginText: {
    fontFamily: 'gilroy-bold',
    fontSize: 30,
    marginTop: 70,
    
    color: '#3A3D41'

  },

  WelcomeText: {
    fontFamily:'gilroy-regular',
    marginTop: 10,
    fontSize: 15,
    color: '#3A3D41'

  },

  EmailText: {
    fontFamily: 'gilroy-bold',
    marginTop: 45,
    fontSize: 17,
    marginBottom:5,
    color: '#3A3D41'
  },

  TextInputView: {
    backgroundColor: 'white',
    height:45,
    width: '100%',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    flexDirection: 'row',
   paddingHorizontal:15,
   justifyContent:'space-between',
    marginBottom: 50,
    marginTop: 5

  },

  TextInput: {
    width: 200,
    color: '#000000',
    
  },

  PassView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  PasswordText: {
    color: '#3A3D41',
    fontFamily: 'gilroy-bold',
    fontSize: 17,
    marginBottom:5
   
  },

  ForgotText: {
   marginBottom:5,
    alignItems: 'center',
    fontFamily: 'gilroy-bold',
    fontSize: 14,
    flexDirection: 'row',
    color: '#2F4EFF'
  },

  MainCheckView: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },

  KeepText: {
    color: '#3A3D41',
    fontSize: 15,
   marginLeft:10,
   fontFamily:'gilroy-regular'
  },

  CheckView: {
    
    alignItems: 'center',
    flexDirection: 'row',
    color: '#2F4EFF'
  },

  LoginView: {
    backgroundColor: '#2F4EFF',
    marginTop: 20,
    padding: 15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 145,
    alignSelf: 'center',
    width:'100%'

  },

  LoginText1: {
    fontSize: 15,
    fontFamily: 'gilroy-bold',
    color: 'white',
    textAlign:'center',

  },

  SignText: {
    alignSelf: 'center',
    marginTop: 25,
    color: '#3A3D41',
    fontFamily:'gilroy-regular',
    fontSize:14
  },

  GoogleView: {
    marginTop: 40,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'center'

  },

  LogoGoogle: {
    width: 25,
    height: 25
  },
  
  ContinueText:{
    marginLeft:7,
    fontFamily:'gilroy-regular',
    fontSize:14
  },

  CreateText: {
    marginTop: 40,
    color: '#2F4EFF',
    fontFamily: 'gilroy-bold',
    alignSelf: 'center',
    fontSize:15

  }



})
export default LoginScreen