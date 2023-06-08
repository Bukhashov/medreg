import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import config from "../../../config";
import { View, Text } from "react-native"


const RegistrationScreen = ({navigation}) => {
    const [ isReg, setIsReq ] = React.useState(false);
    const [lastname, setLastname] = React.useState("");
    const [firstname, setFirstname] = React.useState("");

    const controlIsReg = async () =>  {
        AsyncStorage.getItem("lastname").then(vel => setLastname(vel))
        AsyncStorage.getItem("firstname").then(vel => setFirstname(vel))
        
        try{
            await axios.get(`${config.API_URI}${config.API_VERSION}/reg/info/${await AsyncStorage.getItem('iin').then(iin => iin)}`).then(res => {
                setIsReq(true);
            })
        }
        catch(e){
            setIsReq(false);
            console.log(e);
        }
    }

    const onPressReg = async () => {
        try{
            await axios.post(`${config.API_URI}${config.API_VERSION}/reg/add/user`, {
                iin: await AsyncStorage.getItem('iin').then(iin => iin),
                uid: await AsyncStorage.getItem('uid').then(uid => uid),
            }).then(res => {
                setIsReq(true);
            })
        }catch(e){
            console.log(e);
            setIsReq(false);
        }
    }

    useFocusEffect(React.useCallback(() => {
        controlIsReg();
    }, []))

    return (
        <View>
            {
                isReg
                ? (
                    <View  style={{ marginVertical: 50, marginHorizontal: 20,   }}>
                        <Text style={{textAlign: 'center', color: "#fff", }}>Сіз біздің емханада тіркеуде тұрсыз</Text>
                    </View>
                )
                : (
                    <View style={{ marginVertical: 50, marginHorizontal: 20,   }}>
                        <Text style={{color: "#fff", textAlign: 'center',  }}>Құрметті {lastname} {firstname} сіз біздің емханада тіркеуде жақсы тіркелу үшін тіркелу батырмасын басыныз</Text>
                        
                        <View style={{ padding: 15, display: 'flex', display: 'flex', justifyContent: 'center', }}>
                            <Text 
                                onPress={() => onPressReg()}
                                style={{ color: "#fff" , textAlign: 'center', }}>Тіркелу</Text>
                        </View>
                        
                    </View>
                )
            }
        </View>
    )
}

export default RegistrationScreen;