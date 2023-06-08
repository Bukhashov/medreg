import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import config from "../../../config";
import React from "react";
import { View, Text, Dimensions, TextInput } from "react-native"


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const ResultScreen = (props) => {
    const [data, setData] = React.useState([]);
    const [iin, setIin] = React.useState("");
    const [analisName, setAnalisName] = React.useState("");
    const [diagnostics, setDiagnostics] = React.useState("");

    const sendResult = async () => {
        try{
            await axios.post(`${config.API_URI}${config.API_VERSION}/result/add`, {
                title: analisName,
                iin: iin,
                diagnostics: diagnostics
            }).then(res => {
                setIin("");
                setAnalisName("");
                setDiagnostics("");
            })
        }
        catch(e){
            setIin("");
            setAnalisName("");
            setDiagnostics("");
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
                <Text style={{ paddingVertical: 5, color: "#fff" }}>Анализ анату</Text>
            </View>
            <View>
                <TextInput 
                    umberOfLines={1} 
                    maxLength={50}
                    onChangeText={vel => setAnalisName(vel)} 
                    value={analisName}
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
                <Text style={{ paddingVertical: 5, color: "#fff" }}>Қортынды</Text>
            </View>
            <View>
                <TextInput 
                    umberOfLines={1} 
                    maxLength={50}
                    onChangeText={vel => setDiagnostics(vel)} 
                    value={diagnostics}
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

        

        <View style={{ display: 'flex',  }}>
            <Text onPress={() => { sendResult() }}
            style={{color: "#fff", textAlign: 'center'}}>Енгізу</Text>
        </View>
            
        
        </View>
    </View>
    )
}

export default ResultScreen;