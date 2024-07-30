import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


function ThirdPage({navigation}) {
  return (
    <SafeAreaView style={styles.Main}>
        <ScrollView showsVerticalScrollIndicator={true}>
            <ScrollView>
                <View style={styles.MotherView}>

                    <View style={styles.WrapView}>
                        <TouchableOpacity onPress={() => navigation.navigate ()}>
                        <AntDesign name="profile" size={25} color="black" />
                        </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate()}>
                    <AntDesign name="setting" size={25} color="black" />
                    </TouchableOpacity>
                    </View>

                    <Text style={styles.WelcomeText}>Welcome, Naeh!</Text>
                
                    <View style={styles.DashboardView}>
                        <Image source={require('../../assets/Money.png')} style={styles.MoneyImage}/>
                        <Text style={styles.BalanceText}>Balance:</Text>
                        <Text style={styles.AmountText}>$0.00</Text>
                    </View>

                    <View style={styles.WrapView1}>

                    <View style={styles.DepositView}>
                        <TouchableOpacity onPress={() => navigation.navigate ('deposit')}>
                            <Image source={require('../../assets/Deposit.png')} style={styles.DepositImage}/>
                            <Text style={styles.DepositText}>Deposit</Text>
                        </TouchableOpacity>
                    </View>

                    

                    <View style={styles.WithdrawalView}>
                        <TouchableOpacity onPress={() => navigation.navigate ()}>
                            <Image source={require('../../assets/Withdrawal.png')} style={styles.WithdrawalImage}/>
                            <Text style={styles.WithdrawalText}>Withdrawal</Text>
                        </TouchableOpacity>

                    </View>

                    </View>

                    <View style={styles.WrapView2}>
                    <View style={styles.CustomerView}>
                        <TouchableOpacity onPress={() => navigation.navigate()}>
                        <Feather name="phone-call" size={27} color="black" style={{marginTop:10,marginLeft:110}} />
                            <Text style={styles.CustomerText}>Customer Care</Text>                    
                        </TouchableOpacity>
                    </View>

                    <View style={styles.ReferView}>
                        <TouchableOpacity onPress={() => navigation.navigate()}>
                        <Image source={require('../../assets/Refer.png')} style={styles.ReferImage}/>
                            <Text allowFontScaling={false} style={styles.ReferText}>Refer and Earn</Text>
                        </TouchableOpacity>
                    </View>
                    </View>

                </View>
            </ScrollView>

        </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Main:{
        backgroundColor:'white',
        flex:1,

    },

    WrapView:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginTop:10,
        justifyContent:'space-between',
        marginRight:10
    },

    WelcomeText:{
        fontFamily:'gilroy-bold',
        marginTop:25,
        marginLeft:10   
    },

    DashboardView:{
        backgroundColor:'#2F4EFF',
        marginTop:15,
        borderRadius:15,
        marginRight:10,
        marginLeft:10,
        height:150
        
    },

    MoneyImage:{
        width:38,
        height:38,
        marginLeft:300,
        marginTop:5
    },

    BalanceText:{
        fontFamily:'gilroy-bold',
        fontSize:30,
        color:'white',
        alignSelf:'flex-start',
        marginLeft:15,
    },

    AmountText:{
        marginTop:15,
        marginLeft:30,
        color:'white',
        fontFamily:'gilroy-bold',
        fontSize:50

    },

    WrapView1:{
        backgroundColor:'#2F4EFF',
        marginTop:50,
        height:175,
        borderRadius:15,
        marginRight:15,
        marginLeft:15,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },

    DepositView:{
        backgroundColor:'white',
        width:157,
        height:100,
        marginLeft:10,
        borderRadius:15
    },

    DepositImage:{
        width:38,
        height:38,
        marginLeft:100,
        marginTop:5
    },

    DepositText:{
        justifyContent:'center',
        alignSelf:'flex-start',
        fontFamily:'gilroy-bold',
        marginLeft:5,
        marginTop:20,
        fontSize:20,
        color:'#3A3D41'
    },

    WithdrawalView:{
        backgroundColor:'white',
        width:157,
        marginRight:10,
        height:100,
        borderRadius:15

    },

    WithdrawalImage:{
        width:38,
        height:38,
        marginLeft:100,
        marginTop:5
    },

    WithdrawalText:{
        justifyContent:'center',
        alignSelf:'flex-start',
        marginLeft:5,
        marginTop:20,
        fontFamily:'gilroy-bold',
        fontSize:20,
        color:'#3A3D41'
    },

    WrapView2:{
        backgroundColor:'#2F4EFF',
        marginTop:20,
        height:175,
        borderRadius:15,
        marginRight:15,
        marginLeft:15,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },

    CustomerView:{
        backgroundColor:'white',
        width:157,
        height:100,
        marginLeft:10,
        borderRadius:15
    },

    CustomerText:{
        justifyContent:'center',
        alignSelf:'flex-start',
        marginLeft:5,
        marginTop:25,
        fontFamily:'gilroy-bold',
        fontSize:20,
        color:'#3A3D41'
    },

    ReferView:{
        backgroundColor:'white',
        width:157,
        marginRight:10,
        height:100,
        borderRadius:15

    },

    ReferImage:{
        width:38,
        height:38,
        marginLeft:100,
        marginTop:5

    },


    ReferText:{
        justifyContent:'center',
        alignSelf:'flex-start',
        marginTop:20,
        marginLeft:5,
        fontFamily:'gilroy-bold',
        fontSize:20,
        color:'#3A3D41'

    }



})

export default ThirdPage