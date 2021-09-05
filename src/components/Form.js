import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";

export default function Form({numbers, setNumbers}){
    const {number1,number2,number3,number4} = numbers;

    return(
        <>
        <View style = {styles.inputBox}>
            <Text style={styles.inputText}>Digite su Primer Número</Text>
            <TextInput
                style={styles.inputTextBox}
                keyboardType='numeric'
                onChangeText ={(e) => setNumbers({...numbers, number1:e})}
            />
        </View>
        <View style = {styles.inputBox}>
            <Text style={styles.inputText}>Digite su Segundo Número</Text>
            <TextInput
                style={styles.inputTextBox}
                keyboardType='numeric'
                onChangeText ={(e) => setNumbers({...numbers, number2:e})}
            />
        </View>
        <View style = {styles.inputBox}>
            <Text style={styles.inputText}>Digite su Tercer Número</Text>
            <TextInput
                style={styles.inputTextBox}
                keyboardType='numeric'
                onChangeText ={(e) => setNumbers({...numbers, number3:e})}
            />
        </View>
        <View style = {styles.inputBox}>
            <Text style={styles.inputText}>Digite su Cuarto Número</Text>
            <TextInput
                style={styles.inputTextBox}
                keyboardType='numeric'
                onChangeText ={(e) => setNumbers({...numbers, number4:e})}
            />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    inputBox:{
        backgroundColor: '#9CDDFA',
        borderRadius:15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical:18,
        marginVertical:2,
        marginHorizontal:10,
    },
    inputTextBox:{
        textAlign:'center',
        fontSize:18,
        borderRadius:10,
        backgroundColor:'#fff',
        paddingVertical:2,
        marginLeft:5,
        width:'40%',
    },
    inputText:{
        fontSize: 15,

    }
})