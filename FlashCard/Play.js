import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  
  TouchableOpacity,
} from "react-native";
// import Navigation from './Navigation';

export default function Play({navigation}) {
    const [showCard, setShowcard] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const characters = [
        { japan: 'ぁ', vietnamese: 'a'}, 
        { japan: 'ぬ', vietnamese: 'b'},
        { japan: 'ぽ', vietnamese: 'c'},
        { japan: 'ホ', vietnamese: 'd'},
        { japan: 'ザ', vietnamese: 'e'}
    ];

    const Flip = () => {
        setShowcard(!showCard);
    }

    const getNextCharacter = useCallback(() => {
        setShowcard(true);
        setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % characters.length);
    }, [characters.length]);

    const getPreviousCharacter = useCallback(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? characters.length - 1 : prevIndex - 1
        );
      }, [characters.length]);

    const currentCharacter = characters[currentIndex];

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={Flip} style={styles.cardView}>
                <Text style={styles.textCard}>{showCard ? currentCharacter.japan: currentCharacter.vietnamese}</Text>
            </TouchableOpacity>
            <View style={styles.middleSection}>
                <View style={styles.topbtn}>
                    <TouchableOpacity onPress={getPreviousCharacter}>
                        <Text style={styles.btn}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={getNextCharacter}>
                        <Text style={styles.btn} >Next</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.middlebtn}>
                    <TouchableOpacity>
                        <Text style={styles.btnRemove} >Remove From Deck</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.btnReset}>Reset Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <Navigation/> */}
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
}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EFEFF3",
    },
    cardView: {
        flex: 2.5,
        backgroundColor: "#EA4559",
        width: "90%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    textCard: {
        fontSize: 200,
    },
    middleSection: {
        flex: 1,
    },
    topbtn: {
        flex: 1,
        flexDirection: "row",
        width: 430,
        justifyContent: "space-between",
        alignItems: "center", 
    },
    btn: {
        padding: 10,
        borderWidth: 1, 
        borderColor: 'black',
        borderRadius: 6,
        width: 150,
        textAlign: "center",
        color: "black",
    },
    middlebtn: {
        flex: 1,
        fontSize: 1,
    },
    btnRemove: {
        backgroundColor: "#fff",
        height: 50,
        padding: 15,
        textAlign: "center",
        color: '#EA4459',
    },
    btnReset: {
        backgroundColor: "#fff",
        height: 50,
        padding: 15,
        textAlign: "center",
        marginTop: 10,
        color: '#EA4459',
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
})