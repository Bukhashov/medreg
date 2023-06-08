import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import config from "../../../config";
import { View, Text, SafeAreaView, ScrollView } from "react-native"


const FshkScreen = ({navigation}) => {
    const [data, setData] = React.useState([]);

    const getAllfshk = async () => {
        try {
            await axios.get(`${config.API_URI}${config.API_VERSION}/fluorography/add`).then(res => {
                console.log(res.data)
                setData(res.data);
            })
        }
        catch(e){
            console.log(e);
        }
    }

    useFocusEffect(React.useCallback(() => {
        getAllfshk();
        }, [])
    )

    return (
        <View>
            <SafeAreaView>
                <ScrollView bounces={false} horizontal={false} showsHorizontalScrollIndicator={false}>
                    <View>
                        {
                            data.map((d) => (
                                <View key={d._id}
                                    style={{ backgroundColor: "#A5BDE9",
                                    marginHorizontal: 15, 
                                    marginVertical: 15, 
                                    paddingHorizontal: 12,
                                    paddingVertical: 12,
                                    borderRadius: 12,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                                >
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}>
                                    <   Text style={{ color: "#fff", paddingHorizontal: 5,}}>
                                            { d.number }
                                        </Text>
                                        <Text style={{ color: "#fff", paddingHorizontal: 5,}}>{d.lastname} {d.firstname}</Text>
                                    </View>
                                    
                                    <Text style={{ color: "#fff", paddingHorizontal: 5,}}>{d.iin}</Text>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default FshkScreen;