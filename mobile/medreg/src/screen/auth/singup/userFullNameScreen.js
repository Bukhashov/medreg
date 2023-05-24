import React from "react";
import { View, Text, Dimensions, TextInput } from "react-native"


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const UserNameScreen = ({navigation}) => {
    const [newUserIIN, setNewUserIIN] = React.useState("");
    const [newUserLastname, setNewUserLastname] = React.useState("");
    const [newUserFirstname, setNewUserFirstname] = React.useState("");
    const [newUserPatronymic, setNewUserPatronymic] = React.useState("");

    

    return (
        <View style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: 180}}>
            <View>
                <View style={{paddingHorizontal: 15, paddingVertical: 8}}>
                    <Text style={{ fontSize: 20, color: "#fff", fontWeight: '700'}}>Сәлем жаңа қолданушы!</Text>
                </View>
            
            <View>
                <View style={{marginVertical: 8}}>
                    <Text style={{fontSize: 18, color: "#fff"}}>ЖСН</Text>
                    <TextInput 
                        umberOfLines={1} 
                        maxLength={50}
                        onChangeText={vel =>  setNewUserIIN(newUserIIN)} 
                        value={newUserIIN}
                        style={{ 
                            color:"#A2A9AB", 
                            width: (width/100)*80, 
                            height: 32, 
                            padding: 8, 
                            borderColor: "#A2A9AB", 
                            borderWidth: 1, }}
                    />
                </View>
                <View style={{marginVertical: 8}}>
                    <Text style={{fontSize: 18, color: "#fff"}}>Тегі</Text>
                    <TextInput 
                        umberOfLines={1} 
                        maxLength={50}
                        onChangeText={vel => setNewUserLastname(vel)} 
                        value={newUserLastname}
                        style={{ 
                            color:"#A2A9AB", 
                            width: (width/100)*80, 
                            height: 32, 
                            padding: 8, 
                            borderColor: "#A2A9AB", 
                            borderWidth: 1, }}
                    />
                </View>
                <View style={{marginVertical: 8}}>
                    <Text style={{fontSize: 18, color: "#fff"}}>Аты</Text>
                    <TextInput 
                        umberOfLines={1} 
                        maxLength={50}
                        onChangeText={vel => setNewUserFirstname(vel)} 
                        value={newUserFirstname}
                        style={{ 
                            color:"#A2A9AB", 
                            width: (width/100)*80, 
                            height: 32, 
                            padding: 8, 
                            borderColor: "#A2A9AB", 
                            borderWidth: 1, }}
                    />
                </View>
                <View style={{marginVertical: 8}}>
                    <Text style={{fontSize: 18, color: "#fff"}}>Әкесінін аты</Text>
                    <TextInput 
                        umberOfLines={1} 
                        maxLength={50}
                        onChangeText={vel => setNewUserPatronymic(vel)} 
                        value={newUserPatronymic}
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
                    onPress={() => {
                        navigation.navigate('authUserPasswordScreen', {
                            content: {
                                newUserIIN: newUserIIN,
                                newUserLastname: newUserLastname,
                                newUserFirstname: newUserFirstname,
                                newUserPatronymic: newUserPatronymic,
                            }
                        })
                    }} 
                    style={{paddingVertical: 15, color: "#fff", fontSize: 18, fontWeight: 600 }}>Келесісі</Text>
            </View>
            </View>            
        </View>
    )
}

export default UserNameScreen;