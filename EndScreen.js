import { View, Text, Image } from 'react-native'
import React from 'react'
import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    useFonts
} from '@expo-google-fonts/poppins'
import { Ionicons } from '@expo/vector-icons'

const EndScreen = () => {
    const [loaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold
    })

    if (!loaded) return null;

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }} >
            <Image
                source={require("./assets/Logo.png")}
                style={{
                    marginTop: 42,
                    width: "80%",
                    height: "12%",
                    resizeMode: "contain",
                    alignSelf: 'center',
                }}
            />
            <Text
                style={{
                    marginTop: 8,
                    fontFamily: 'Poppins_500Medium',
                    fontSize: 20,
                    alignSelf: 'center'
                }}
            >We understand your world</Text>

            <View
                style={{
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    elevation: 7,
                    padding: 12,
                    marginHorizontal: "8%",
                    marginTop: 55
                }}
            >
                <View
                    style={{
                        alignSelf: 'center',

                    }} >
                    <Ionicons name="ios-checkmark-done-circle" size={55} color="green" />
                </View>

                <Text
                    style={{
                        marginTop: 22,
                        fontFamily: 'Poppins_600SemiBold',
                        fontSize: 22,
                        alignSelf: 'center',
                        textAlign: 'center',
                        // color: 'green'
                    }}
                >Thank You for Redeem 5000 Points !!!</Text>
                <Text
                    style={{
                        marginTop: 22,
                        fontFamily: 'Poppins_600SemiBold',
                        fontSize: 18,
                        alignSelf: 'center',
                        textAlign: 'center',
                        color: 'green'
                    }}
                >Thank You for Redeem 5000 Points !!!</Text>
            </View>
        </View>
    )
}

export default EndScreen