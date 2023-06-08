import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { View, Text, Dimensions} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileInfoComponent from "../../component/profileInfoComponent";


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const ProfileScreen = ({navigation}) => {
    const [iin, setIin] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [firstname, setFirstname] = React.useState("");
    const [uid, setUid] = React.useState("");
    const [patronymic, setPatronymic] = React.useState("");

    const getData = () => {
        AsyncStorage.getItem("uid").then(vel => setUid(vel))
        AsyncStorage.getItem("lastname").then(vel => setLastname(vel))
        AsyncStorage.getItem("firstname").then(vel => setFirstname(vel))
        AsyncStorage.getItem("patronymic").then(vel => setPatronymic(vel))
        AsyncStorage.getItem("iin").then(vel => setIin(vel))

    }
    const logout = () => {
        AsyncStorage.clear();
        navigation.navigate('singin');
    }

    useFocusEffect(
        React.useCallback(() => {
            getData();
        }, [])
    )

    return (
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <View>
                <View
                    style={{ paddingVertical: 12,
                        display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
                >
                    <View style={{
                        width: 150,
                        height: 150,
                        borderRadius: 50,
                        backgroundColor: "#8F9EBB",
                    }} />
                </View>
                
                <ProfileInfoComponent title={"иин"} name={iin} />
                <ProfileInfoComponent title={"Тегі"} name={lastname} />
                <ProfileInfoComponent title={"Аты"} name={firstname} />
                <ProfileInfoComponent title={"Әкесінің аты"} name={patronymic} />
                <ProfileInfoComponent title={"uid"} name={uid} />

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text onPress={() => logout()} 
                        style={{color: "#fff", paddingHorizontal: 8, paddingVertical: 5,}}
                        >Шығу</Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileScreen;