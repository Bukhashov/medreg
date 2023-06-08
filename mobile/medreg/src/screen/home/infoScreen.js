import { View, Text, Image, Dimensions, SafeAreaView, ScrollView,} from "react-native"
import Line from '../../component/line';


const { width, height } = Dimensions.get("window");

const InfoScreen = ({navigation}) => {
    return (
        <View>
            <View>
                <Image style={{width: width, height: 250, }} source={{ uri: 'https://polikliniki.kz/upload/images/big/18809_968347_12.png' }} />
            </View>
            <SafeAreaView>
                <ScrollView bounces={false} horizontal={false} showsHorizontalScrollIndicator={false}>
                    <View style={{paddingHorizontal: 15,}}>
                        <View style={{ paddingVertical: 10 }}>
                            <Text style={{ color: "#fff",  }}>Қазақстан Республикасының азаматтарына медициналық қызметтердің жоғары сапасын қамтамасыз ететін заманауи инновациялық және басқарушылық технологияларды пайдаланатын жоғары білікті мамандармен жасақталған бәсекеге қабілетті емдеу-профилактикалық кәсіпорын.</Text>
                        </View>
                        <Line/>
                        <View style={{ paddingVertical: 10, display: 'flex', flexDirection: 'row', alignItems: 'center',  }}>
                            <Text style={{ color: "#fff", fontSize: 16, }}>Адрес: </Text>
                            <Text style={{ color: "#fff", fontSize: 16, }}>микрорайон Гульдер, пр. Шахтеров, 78</Text>
                        </View>
                        <Line/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default InfoScreen;