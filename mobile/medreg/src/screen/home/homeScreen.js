import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import HomeScreenMainComponent from '../../component/homeScreenMainComponent';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;


const HomeScreen = () => {
    return (
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <HomeScreenMainComponent title={"Емханаға тіркелу"} to={""} />
                    <HomeScreenMainComponent title={"Емхана жайлы"} to={""} />
                </View>

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <HomeScreenMainComponent title={"Дәрігерге кезеке тұру"} to={""} />
                    <HomeScreenMainComponent title={"ФШК ға кезек алу"} to={""} />
                </View> 

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <HomeScreenMainComponent title={"Дәрігер шақыру"} to={""} />
                    <HomeScreenMainComponent title={"Менін дәрілерім"} to={""} />  
                </View> 
            </View>                      
        </View>
    )
}

export default HomeScreen;