import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import config from "../../../config";
import React from "react";
import { View, Text, Dimensions } from "react-native"


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const ResultScreen = (props) => {
    const [data, setData] = React.useState([]);

    const fetchData = async () => {
        await axios.get(`${config.API_URI}${config.API_VERSION}/result/${props.route.params.content.id}`).then(response => {
            setData(response.data);
            console.log(response.data);
        })
    }

    useFocusEffect(
        React.useCallback(() => {
            fetchData();
        }, [])
    )
    
    return (
        <View style={{display: 'flex', flexDirection: 'row',  justifyContent: 'center' }}>
            <View style={{ marginHorizontal: 15, paddingVertical: 15, paddingHorizontal: 10,  }}>
                <View style={{ backgroundColor: "#A5BDE9", marginVertical: 12, borderRadius: 8,
                    paddingHorizontal: 8, paddingVertical: 15, 
                    display: 'flex', flexDirection: 'row',  justifyContent: 'space-between', 
                    width: width-20, 
                }}>
                    <Text style={{color: "#fff",}}>Тексеріс</Text>
                    <Text style={{color: "#fff",}}>{data.title}</Text>
                </View>
                <View style={{backgroundColor: "#A5BDE9", marginVertical: 12, borderRadius: 8,
                    paddingHorizontal: 8, paddingVertical: 15, 
                    display: 'flex', flexDirection: 'row',  justifyContent: 'space-between', 
                    width: width-20, 
                }}>
                    <Text style={{color: "#fff",}}>Жауабы</Text>
                    <Text style={{color: "#fff",}}>{data.diagnostics}</Text>
                </View>
                <View style={{backgroundColor: "#A5BDE9", marginVertical: 12, borderRadius: 8,
                    paddingHorizontal: 8, paddingVertical: 15, 
                    display: 'flex', flexDirection: 'row',  justifyContent: 'space-between', 
                    width: width-20, 
                }}>
                    <Text style={{color: "#fff",}}>Күні</Text>
                    <Text style={{color: "#fff",}}>{data.date}</Text>
                </View>

                <View style={{backgroundColor: "#A5BDE9",  marginVertical: 12, borderRadius: 8,
                    paddingHorizontal: 8, paddingVertical: 15, 
                    display: 'flex', flexDirection: 'row',  justifyContent: 'space-between', 
                    width: width-20,
                }}>
                    <Text style={{color: "#fff",}}>id</Text>
                    <Text style={{color: "#fff",}}>{data._id}</Text>
                </View>
            </View>
        </View>
    )
}

export default ResultScreen;