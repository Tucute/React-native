import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,  SafeAreaView,
} from "react-native";

export default function Setting({navigation}) {

    const DATA = [
        { id: '1', icon: 'ぁ', name: 'Hiragana', describe: 'Basic Japanese alphabet'},
        { id: '2', icon: 'ぬ', name: 'Voiced Hiragana', describe: 'Muddied consonant'},
        { id: '3', icon: 'ぽ', name: 'Conbined Hiragana', describe: 'Consonant + smaill x,c,v'},
    ];

    const DATA2 = [
        { id: '4', icon: 'ザ', name: 'Katakana', describe: 'Foreign pronunciation alphabet'},
        { id: '5', icon: 'ホ', name: 'Voiced Katakana', describe: 'Muddied consonant'},
        { id: '6', icon: 'ぬ', name: 'Conbined Katakana', describe: 'Consonant + smaill x,c,v'},
    ];

    const Item = ({data}) => (
        <View style={{flex: 1}}>
        <TouchableOpacity style={styles.selectionLanguage}>
            <View style={{padding: 6}}>
                {data.id > 3 ? <Text style={styles.letter2}>{data.icon}</Text> : <Text style={styles.letter}>{data.icon}</Text> }
            </View>
            
            <View style={styles.textSelection}>
                <Text style={{fontSize: 18}}>{data.name}</Text>
                <Text style={{fontSize: 11, color: "#EA4459" }} >{data.describe}</Text>
                <View style={styles.line}></View>
            </View>
        </TouchableOpacity>
        </View>
      );

    return (
        <View style={styles.container}>
            <View style={styles.section1}>
                <Text style={styles.title}>HIRAGANA SET</Text>
                <SafeAreaView>
                    <FlatList
                        data={DATA}
                        renderItem={({item}) => <Item data={item} />}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
            <View style={styles.section1}>
                <Text style={styles.title}>KATANA SET</Text>
                <SafeAreaView>
                    <FlatList
                        data={DATA2}
                        renderItem={({item}) => <Item data={item} />}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
            
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
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    section1: {
        flex: 2,
        paddingTop: 20,
    },
    title: {
        marginBottom: 10,
        marginLeft: 10,
    },
    selectionLanguage: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: "center",
        backgroundColor: "white",
        color: "#EA4459",
    },
    line: {
        borderBottomColor: "#EA4459",
        borderBottomWidth: 0.35,
    },
    letter2: {
        backgroundColor: "#F19E3B", 
        borderRadius: 15,
        padding: 10,
        width: 60,
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        marginLeft: 10,
        textAlign: "center",
    },
    letter: {
        backgroundColor: "#EA4459", 
        borderRadius: 15,
        padding: 10,
        width: 60,
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        marginLeft: 10,
        textAlign: "center",
    },
    textSelection: {
        marginLeft: 20,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
    },

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