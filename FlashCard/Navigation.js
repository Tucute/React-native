import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
  } from "react-native";

export default function Navigation({navigation}){
    return (
        <View style={styles.navigation}>
            <TouchableOpacity style={{alignItems: "center"}} onPress={()=>navigation.navigate('Play')}>
                <Image source={require('../assets/images/play-icon.png')} style={styles.iconPlay}/>
                <Text style={styles.btnRemove} >Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: "center"}}  onPress={()=>navigation.navigate('Setting')}>
                <Image source={require('../assets/images/setting-icon.png')} style={styles.iconSetting}/>
                <Text style={styles.btnRemove} >Setting</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navigation: {
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 40,
        paddingTop: 20,
        backgroundColor: "#fff",
        width: "100%",
    },
    iconPlay: {
        width: 40,
        height: 40,
    },
    iconSetting: {
        width: 40,
        height: 40,
    }
});
