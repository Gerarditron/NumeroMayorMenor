import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ProgressBarAndroidComponent} from 'react-native';

export default function Footer({solve}){
    return(
        <View style={styles.boxFooter}>
            <TouchableOpacity style={styles.buttonFooter} activeOpacity={0.8} onPress={solve}>
                <Text style={styles.textFooter}>JUGAR</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    boxFooter:{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:80,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:5,
    },
    buttonFooter:{
        backgroundColor:'#04AAC1',
        padding:20,
        borderRadius:50,
        width: '60%',
        alignItems:'center',
        borderColor: '#000',
        borderWidth:2,
    },
    textFooter:{
        fontWeight:'bold',
        fontSize: 22,
        color: '#000',
    },
});