import { View, TouchableOpacity, Text, Dimensions } from "react-native"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const HomeScreenMainComponent = (props) => {
    return (
        <TouchableOpacity style={{ 
            display: 'flex', flexDirection: 'row', justifyContent: 'center' ,
            marginHorizontal: 10, marginVertical: 15, backgroundColor: "#A5BDE9",  width: (width/100)*45, borderRadius: 12 }}
            onPress={() => {
                props.navigation.navigate(props.to)
            }}
            >
            
            <Text style={{paddingHorizontal: 35, paddingVertical: 25, color: "#fff" }} >{props.title}</Text>
        </TouchableOpacity>
    )
}

export default HomeScreenMainComponent;