import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import HomeScreenMainComponent from '../../component/homeScreenMainComponent';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;


const HomeScreen = ({navigation}) => {
    return (
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <HomeScreenMainComponent navigation={navigation} title={"Емханаға тіркелу"} to={"RegistrationScreen"} />
                    <HomeScreenMainComponent navigation={navigation}  title={"Емхана жайлы"} to={"InfoScreen"} />
                </View>

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <HomeScreenMainComponent navigation={navigation}  title={"Дәрігер шақыру"} to={"InvitationScreen"} />
                    <HomeScreenMainComponent navigation={navigation}  title={"ФШК ға кезек алу"} to={"FshkScreen"} />
                </View> 

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    
                    <HomeScreenMainComponent navigation={navigation}  title={"Менін дәрілерім"} to={"MyDrugsScreen"} />  
                </View> 
            </View>                      
        </View>
    )
}

export default HomeScreen;