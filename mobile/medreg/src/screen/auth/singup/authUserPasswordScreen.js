import React, { useState } from "react";
import { View, Text, TextInput, Dimensions } from "react-native"

import axios from "axios";
import config from "../../../../config";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const AuthUserPasswordScreen = (props) => {
    const [newUserPassword, setNewUserPassword] = useState([]);
    const [newUserPasswordConfirem, setNewUserPasswordConfirem] = useState([]);
    

    const auth = async () => {
        if(newUserPassword == newUserPasswordConfirem) {
            console.log("auth")
            singup();
        }else{

        }
    }
    const singup = async () => {
        try {
            await axios.post(`${config.API_URI}${config.API_VERSION}/auth/user/singin`, {
                iin: props.route.params.content.iin,
                firstname: props.route.params.content.firstname,
                lastname: props.route.params.content.lastname,
                password: newUserPassword,
               
            }).then((response) => {
                if(response.status >= 200 && response.status < 400) {
                    props.navigation.navigate('singin');
                }
            });
        }
        catch(e) {
            console.log(e)
        }
    }


    return (
        <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: 180}}>
            <View>
                <View style={{paddingHorizontal: 15, paddingVertical: 8}}>
                    <Text style={{ fontSize: 20, color: "#fff", fontWeight: '700'}}>Құпия сөзінізді енгізініз</Text>
                </View>
                <View>
                    <View style={{marginVertical: 12}}>
                        <Text style={{paddingBottom: 8, fontSize: 18, color: "#fff"}}>Құпия сөз</Text>
                        <TextInput 
                            umberOfLines={1} 
                            maxLength={50}
                            onChangeText={vel => setNewUserPassword(vel)} 
                            value={newUserPassword}
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
                        <Text style={{paddingBottom: 8, fontSize: 18, color: "#fff"}}>Құпия сөзді қайтадан енгізініз</Text>
                        <TextInput 
                            umberOfLines={1} 
                            maxLength={50}
                            onChangeText={vel => setNewUserPasswordConfirem(vel)} 
                            value={newUserPasswordConfirem}
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
                <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', padding: 5,}}>
                <Text
                    onPress={() => auth()} 
                    style={{paddingVertical: 15, color: "#fff", fontSize: 18, fontWeight: 600 }}>Тіркеліу</Text>
            </View>
            </View>
        </View>
    )
}

export default AuthUserPasswordScreen;