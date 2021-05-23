import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import{Ionicons} from '@expo/vector-icons';

export default function TaskLis({data}) {
    return (
        <View style = {styles.container}>
            <TouchableOpacity>
                <Ionicons name="md-checkmark-circle" size={30} coolor= '#121212'/>
            </TouchableOpacity>
            <View>
                <Text style={ styles.task}> {data.task} </Text>
            </View>
            
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        margin:15,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#FFFF',
        borderRadius:5,
        padding:9,
        elevation:1.5,
        shadowColor:'#0000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:1,
            height:3,
        }
    },
    task:{
        color:'#121212',
        fontSize:25,
        paddingLeft:15,
        paddingRight:90,

    }
});