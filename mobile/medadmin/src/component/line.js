import { View, Dimensions } from "react-native"

const width = Dimensions.get('window').width;

const LineComponent = () => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        }}>
            <View style={{
                width: width-60,
                height: 3,
                margin: 5,
                borderRadius: 2,
                backgroundColor: "#A5BDE9"
            }}/>
        </View>
       
    )
}

export default LineComponent;