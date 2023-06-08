import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import config from "../../../config";
import { View, Text } from "react-native"


const FshkScreen = ({navigation}) => {
    const [numberIs, setNumberIs] = React.useState(false);
    const [number, setNumber] = React.useState("");

    const Reg = async () => {
        try {
            await axios.post(`${config.API_URI}${config.API_VERSION}/fluorography/record`,{
                iin: await AsyncStorage.getItem('iin').then(iin => iin)
            }).then(res => {
                console.log(res.data)
                setNumber(res.data.number);
                setNumberIs(true);
            })
        }
        catch(e){
            setNumberIs(false);
            console.log(e);
        }
    }

    return (
        <View>
            {
                numberIs
                ? (
                    <View style={{
                        backgroundColor: "#A5BDE9",
                        marginHorizontal: 50,
                        marginVertical: 50,
                        paddingHorizontal: 25,
                        paddingVertical: 50,
                        borderRadius: 8,
                    }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  }}>
                            <Text style={{ color: "#fff", fontSize: 16, fontWeight: '500', }}>Сіздін кезекті нөмерініз: </Text>
                            <Text style={{ fontSize: 26, fontWeight: '600', textAlign: 'center', color: "#fff",  }}>{number}</Text>
                        </View>
                    </View>
                )
                : (
                    <View>
                        <View style={{ backgroundColor: "#A5BDE9", marginHorizontal: 15, marginVertical: 10, borderRadius: 8, paddingHorizontal: 15, paddingVertical: 25,}}>
                            <Text style={{ textAlign: 'center', color: "#fff"}}>флюорография бөліміне кезек алу</Text>
                        </View>
                        <View style={{ display: 'flex',  }}>
                            <Text onPress={() => {  Reg() }} 
                                style={{ textAlign: 'center', paddingHorizontal: 15, paddingVertical: 25, color: "#fff", fontSize: 18,  }}>Кезек алу</Text>
                        </View>
                    </View>
                    
                )
            }
        </View>
    )
}

export default FshkScreen;