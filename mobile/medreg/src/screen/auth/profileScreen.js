import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { View, Text, Dimensions} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileInfoComponent from "../../component/profileInfoComponent";


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const ProfileScreen = () => {
    const [iin, setIin] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [firstname, setFirstname] = React.useState("");
    const [uid, setUid] = React.useState("");

    const getData = () => {
        AsyncStorage.getItem("uid").then(vel => setUid(vel))
        AsyncStorage.getItem("lastname").then(vel => setLastname(vel))
        AsyncStorage.getItem("firstname").then(vel => setFirstname(vel))
        AsyncStorage.getItem("iin").then(vel => setIin(vel))
    }

    useFocusEffect(
        React.useCallback(() => {
            getData();
        }, [])
    )

    return (
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <View>
                <ProfileInfoComponent title={"Тегі"} name={lastname} />
                <ProfileInfoComponent title={"Аты"} name={firstname} />
                <ProfileInfoComponent title={"Тегі"} name={lastname} />
                <ProfileInfoComponent title={"Тегі"} name={lastname} />
            
            </View>
        </View>
    )
}

export default ProfileScreen;