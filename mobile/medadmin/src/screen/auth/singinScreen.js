import React ,{ useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../config';
import axios from 'axios';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const SinginScreen = ({navigation}) => {
    const [iin, setIin] = useState("")
    const [password, setPassword] = useState("")

    const onPressLogin = async () => {
        try{
            await axios.post(`${config.API_URI}${config.API_VERSION}/auth/user/singin`, {
                iin: iin,
                password: password,
            }).then(async (response) => {
                await AsyncStorage.setItem('uid', response.data.uid)
                await AsyncStorage.setItem('lastname', response.data.lastname)
                await AsyncStorage.setItem('firstname', response.data.firstname)
                await AsyncStorage.setItem('iin', response.data.iin)
                await AsyncStorage.setItem('patronymic', response.data.patronymic)
                
                console.log(response.data);
            });
            
            navigation.navigate('mainNavigator');
        }
        catch(e){
            console.log(e);
            setIin("")
            setPassword("")
            console.log("login no")
        }
    }

    const onPressAuth = () => {
        navigation.navigate('singup')
    }

    return(
        <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: 180}}>
            <View>
                <View style={{paddingHorizontal: 15, paddingVertical: 8, display: 'flex', justifyContent: 'center', flexDirection: 'row',}}>
                    <Text style={{ fontSize: 20, color: "#fff", fontWeight: '700'}}>Қош келдініз</Text>
                </View>
                <View>
                    <View style={{marginVertical: 12}}>
                        <Text style={{paddingBottom: 8, fontSize: 18, color: "#fff"}}>ЖСН</Text>
                        <TextInput 
                            umberOfLines={1} 
                            maxLength={50}
                            onChangeText={vel => setIin(vel)} 
                            value={iin}
                            style={{ 
                                color:"#A2A9AB", 
                                width: (width/100)*80, 
                                height: 32, 
                                padding: 8, 
                                borderColor: "#A2A9AB", 
                                borderWidth: 1, }}
                        />
                    </View>
                    <View style={{marginVertical: 12}}>
                        <Text style={{paddingBottom: 8, fontSize: 18, color: "#fff"}}>Құпия сөз</Text>
                        <TextInput 
                            umberOfLines={1} 
                            maxLength={50}
                            onChangeText={vel => setPassword(vel)} 
                            value={password}
                            style={{ 
                                color:"#A2A9AB", 
                                width: (width/100)*80, 
                                height: 32, 
                                padding: 8, 
                                borderColor: "#A2A9AB", 
                                borderWidth: 1, }}
                        />
                    </View>
                </View>
                <View style={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'row', padding: 5,}}>
                    <Text
                        onPress={() => onPressAuth()} 
                        style={{paddingVertical: 3, color: "#fff", fontSize: 14, fontWeight: 600 }}>Тіркеліу</Text>
                </View>
                <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', padding: 5,}}>
                    <Text
                        onPress={() => onPressLogin()} 
                        style={{paddingVertical: 5, color: "#fff", fontSize: 18, fontWeight: 600 }}>Кіру</Text>
                </View>
            </View>
        </View>
    )
}

export default SinginScreen;