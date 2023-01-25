import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    useFonts
} from '@expo-google-fonts/poppins'
import { FontAwesome } from '@expo/vector-icons'

const Home = ({ navigation }) => {
    const [loaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold
    })

    if (!loaded) return null;

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }} >
            <Text
                style={{
                    marginTop: 50,
                    fontFamily: 'Poppins_500Medium',
                    fontSize: 24,
                    alignSelf: 'center'
                }}
            >Available 5000 Reward Points</Text>
            <Image
                source={require("./assets/Logo.png")}
                style={{
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

            <View style={{ flexDirection: "row", marginTop: 14, marginHorizontal: '3%', }}>
                <View>
                    <Text
                        style={{
                            fontFamily: 'Poppins_400Regular',
                            fontSize: 14,
                        }}
                    >Your Name</Text>
                    <TextInput
                        placeholder='Name'
                        style={{
                            marginTop: 2,
                            padding: 4,
                            paddingLeft: 10,
                            borderWidth: 1,
                            borderColor: '#33373B',
                            borderRadius: 6,
                            fontFamily: "Poppins_500Medium",
                            width: 120,
                            fontSize: 14
                        }}
                    />
                </View>
                <View style={{ marginLeft: '12%' }}>
                    <Text
                        style={{
                            fontFamily: 'Poppins_400Regular',
                            fontSize: 14,
                        }}
                    >Mobile Number</Text>
                    <TextInput
                        placeholder='99xxx99'
                        style={{
                            marginTop: 2,
                            padding: 4,
                            paddingLeft: 10,
                            borderWidth: 1,
                            borderColor: '#33373B',
                            borderRadius: 6,
                            fontFamily: "Poppins_500Medium",
                            width: "180%",
                            fontSize: 14
                        }}
                    />
                </View>
            </View>

            <View style={{ marginHorizontal: '3%', marginTop: 12 }} >
                <Text
                    style={{
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 14,
                    }}
                >Enter Email Id</Text>
                <TextInput
                    placeholder='ex@gmail.com'
                    style={{
                        marginTop: 2,
                        padding: 4,
                        paddingLeft: 10,
                        borderWidth: 1,
                        borderColor: '#33373B',
                        borderRadius: 6,
                        fontFamily: "Poppins_500Medium",
                        fontSize: 14
                    }}
                />

                <Text
                    style={{
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 14,
                        marginTop: 12
                    }}
                >Date Of Birth</Text>
                <TextInput
                    placeholder='Date Of Birth'
                    style={{
                        marginTop: 2,
                        padding: 4,
                        paddingLeft: 10,
                        borderWidth: 1,
                        borderColor: '#33373B',
                        borderRadius: 6,
                        fontFamily: "Poppins_500Medium",
                        fontSize: 14
                    }}
                />

                <Text
                    style={{
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 14,
                        marginTop: 12
                    }}
                >Card Number</Text>
                <TextInput
                    placeholder='Card Number'
                    style={{
                        marginTop: 2,
                        padding: 4,
                        paddingLeft: 10,
                        borderWidth: 1,
                        borderColor: '#33373B',
                        borderRadius: 6,
                        fontFamily: "Poppins_500Medium",
                        fontSize: 14
                    }}
                />

                <Text
                    style={{
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 14,
                        marginTop: 12
                    }}
                >Card Holder Name</Text>
                <TextInput
                    placeholder='Card Holder Name'
                    style={{
                        marginTop: 2,
                        padding: 4,
                        paddingLeft: 10,
                        borderWidth: 1,
                        borderColor: '#33373B',
                        borderRadius: 6,
                        fontFamily: "Poppins_500Medium",
                        fontSize: 14
                    }}
                />

            </View>

            <View style={{ flexDirection: "row", marginTop: 14, marginHorizontal: '3%', }}>
                <View>
                    <Text
                        style={{
                            fontFamily: 'Poppins_400Regular',
                            fontSize: 14,
                        }}
                    >Expiry Date</Text>
                    <TextInput
                        placeholder='MM/YY'
                        style={{
                            marginTop: 2,
                            padding: 4,
                            paddingLeft: 10,
                            borderWidth: 1,
                            borderColor: '#33373B',
                            borderRadius: 6,
                            fontFamily: "Poppins_500Medium",
                            width: 120,
                            fontSize: 14
                        }}
                    />
                </View>
                <View style={{ marginLeft: '12%' }}>
                    <Text
                        style={{
                            fontFamily: 'Poppins_400Regular',
                            fontSize: 14,
                        }}
                    >CVV</Text>
                    <TextInput
                        placeholder='CVV'
                        style={{
                            marginTop: 2,
                            padding: 4,
                            paddingLeft: 10,
                            borderWidth: 1,
                            borderColor: '#33373B',
                            borderRadius: 6,
                            fontFamily: "Poppins_500Medium",
                            width: 100,
                            fontSize: 14
                        }}
                    />
                </View>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate("EndScreen")}
            >
                <View style={{
                    backgroundColor: "#00c907",
                    borderRadius: 10,
                    marginTop: 22,
                    paddingHorizontal: 30,
                    paddingVertical: 4,
                    alignSelf: 'center'
                }} >
                    <Text
                        style={{
                            fontFamily: 'Poppins_600SemiBold',
                            fontSize: 18,
                            color: "#fff"
                        }}
                    >SUBMIT NOW</Text>
                </View>
            </TouchableOpacity>

            <View style={{
                backgroundColor: "black",
                alignSelf: 'center',
                padding: 2,
                paddingHorizontal: 12,
                borderRadius: 6,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 22
            }} >
                <FontAwesome name="lock" size={20} color="white" />
                <Text
                    style={{
                        marginLeft: 8,
                        fontFamily: 'Poppins_500Medium',
                        fontSize: 12,
                        color: "#00c907"
                    }}
                >We Secured Your Details</Text>
            </View>

        </View>
    )
}

export default Home