import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";
import { View, Text, Dimensions, TouchableOpacity, SafeAreaView, ScrollView} from "react-native"
import axios from 'axios';
import config from "../../../config";
import ActivityIndicatorComponent from "../../component/activityIndicator";


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const ResultsScreen = ({navigation}) => {
    const [data, setData] = React.useState([]);
    const [isLoding, setIsLoding] = React.useState(true);

    const fetchData = async () => {
        try {
            await axios.get(`${config.API_URI}${config.API_VERSION}/result/all/${await AsyncStorage.getItem('iin')}`).then(response => {
                setData(response.data);
                console.log(response.data);
                setIsLoding(false);
            })
        }
        catch(e){
            console.log(e);
        }
    }
    useFocusEffect(React.useCallback(() => {
        fetchData();
        },[])
    )
    
    return (
        <View style={{display: 'flex', flexDirection: 'row',  justifyContent: 'center' }}>
            {
                isLoding ? <ActivityIndicatorComponent/>
                : <SafeAreaView>
                    <ScrollView horizontal={false} showsHorizontalScrollIndicator={true}>
                        {
                            data.map(d => 
                                <TouchableOpacity style={{
                                    width: width-30,
                                    borderRadius: 10,
                                    marginVertical: 10, 
                                    paddingHorizontal: 10, paddingVertical: 15, 
                                    backgroundColor: "#A5BDE9", 
                                    display: 'flex', flexDirection: 'row', 
                                    }}
                                    onPress={() => {
                                        navigation.navigate('resultScreen', {
                                            content: {
                                                id: d._id
                                            }
                                        })
                                    }}
                                    >
                                    <Text style={{color: "#fff", paddingVertical: 3 }}>{d.title}</Text>
                                </TouchableOpacity>    
                            )
                        }
                    </ScrollView>
                </SafeAreaView>
            }
        </View>
    )
}

export default ResultsScreen;