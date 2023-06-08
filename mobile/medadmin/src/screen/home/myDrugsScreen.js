import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import config from "../../../config";
import { View, Text, TextInput, Dimensions } from "react-native"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const MyDrugsScreen = ({navigation}) => {
    const [iin, setIin] = React.useState("");
    const [dName, setDName] = React.useState("");
    const [subject, setSubject,] = React.useState("");

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
    const sendDrougs = async () => {
        try{
            await axios.post(`${config.API_URI}${config.API_VERSION}/drugs/add`, {
                iin: iin,
                title: dName,
                subject: subject
            }).then(res => {
                setIin("")
                setDName("")
                setSubject("")
            });
        }
        catch(e){
            setIin("")
            setDName("")
            setSubject("")
            console.log(e)
        }
        
    }
    
    return (
        <View style={{ paddingHorizontal: 15, }}>
            <View style={{ display: 'flex',  }}>
                <Text style={{ textAlign: 'center', padding: 15, fontSize: 18, fontWeight: '600', color: "#fff" }}>Дәрілер беру</Text>
            </View>
            <View>
            
            <View style={{ paddingVertical: 10 }}>
                <View>
                    <Text style={{ paddingVertical: 5, color: "#fff" }}>ИИН</Text>
                </View>
                <View>
                    <TextInput 
                        umberOfLines={1} 
                        maxLength={50}
                        onChangeText={vel => setIin(vel)} 
                        value={iin}
                        style={{ 
                            color:"#A2A9AB", 
                                        width: (width/100)*90, 
                                        height: 32, 
                                        padding: 8, 
                                        borderColor: "#A2A9AB", 
                                        borderWidth: 1, }}
                                />
                </View>
            </View>
            <View style={{  paddingVertical: 10 }}>
                <View>
                    <Text style={{ paddingVertical: 5, color: "#fff" }}>Дәрі атауы</Text>
                </View>
                <View>
                    <TextInput 
                        umberOfLines={1} 
                        maxLength={50}
                        onChangeText={vel => setDName(vel)} 
                        value={dName}
                        style={{ 
                            color:"#A2A9AB", 
                                        width: (width/100)*90, 
                                        height: 32, 
                                        padding: 8, 
                                        borderColor: "#A2A9AB", 
                                        borderWidth: 1, }}
                                />
                </View>
            </View>

            <View style={{  paddingVertical: 10 }}>
                <View>
                    <Text style={{ paddingVertical: 5, color: "#fff" }}>Ақпарат</Text>
                </View>
                <View>
                    <TextInput 
                        umberOfLines={1} 
                        maxLength={50}
                        onChangeText={vel => setSubject(vel)} 
                        value={subject}
                        style={{ 
                            color:"#A2A9AB", 
                                        width: (width/100)*90, 
                                        height: 180, 
                                        padding: 8, 
                                        borderColor: "#A2A9AB", 
                                        borderWidth: 1, }}
                                />
                </View>
            </View>

            <View style={{ display: 'flex',  }}>
                <Text onPress={() => { sendDrougs() }}
                style={{color: "#fff", textAlign: 'center'}}>Енгізу</Text>
            </View>
                
            
            </View>
        </View>
    )
}

export default MyDrugsScreen;
