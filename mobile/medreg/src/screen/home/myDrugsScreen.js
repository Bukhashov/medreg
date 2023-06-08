import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import config from "../../../config";
import { View, Text, SafeAreaView, ScrollView } from "react-native"


const MyDrugsScreen = ({navigation}) => {
    const [myDrugs, setMyDrugs] = React.useState([]);

    const feachMyDrugs = async () => {
        try{
            await axios.get(`${config.API_URI}${config.API_VERSION}/drugs/${await AsyncStorage.getItem('iin').then(iin => iin)}/all`)
            .then((res)=> {
                setMyDrugs(res.data)
            })
        }catch(e){
            console.log(e)
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            feachMyDrugs();
        }, [])
    )
    
    return (
        <View>
            <View style={{ display: 'flex',  }}>
                <Text style={{ textAlign: 'center', padding: 15, fontSize: 18, fontWeight: '600', color: "#fff" }}>Менін дәрілерім</Text>
            </View>
            <SafeAreaView>
                <ScrollView bounces={false} horizontal={false} showsHorizontalScrollIndicator={false}>
                    <View style={{ paddingHorizontal: 12, }}>
                        {
                            myDrugs.map((d) => (
                                <View key={d._id}
                                    style={{
                                        backgroundColor: "#A5BDE9",
                                        borderRadius: 8,
                                        paddingHorizontal: 8,
                                        marginVertical: 10,
                                        paddingVertical: 12,
                                    }}
                                >
                                    <Text style={{ color: "#fff", fontSize: 18, }}>{d.title}</Text>
                                    <Text style={{ color: "#fff", fontSize: 14, }}>{d.subject}</Text>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default MyDrugsScreen;
