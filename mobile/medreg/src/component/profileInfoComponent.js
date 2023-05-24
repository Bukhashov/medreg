import { View, Text, Dimensions } from "react-native"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

const ProfileInfoComponent = (props) => {
    return (
        <View style={{ width: width-50, borderRadius: 8, paddingVertical: 15, paddingHorizontal: 25, backgroundColor: "#A5BDE9", display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{color: "#fff"}}>{props.title}</Text>
            <Text style={{color: "#fff"}}>{props.name}</Text>
        </View>
    )
}

export default ProfileInfoComponent;