import { View, Text } from "react-native"
import LineComponent from "../../component/line";

const InvitationScreenInfo = ({title, phone}) => {
    return (
        <>
            <View style={{ paddingHorizontal: 25, paddingVertical: 15, display: 'flex', flexDirection: 'row',  justifyContent: 'space-between',  }}>
                    <Text style={{ color: "#fff"}}>{title}</Text>
                    <Text style={{ color: "#fff"}}>{phone}</Text>
            </View>
            <LineComponent />
        </>
    )
}

const InvitationScreen = ({navigation}) => {
    return (
        <View style={{ marginVertical: 25, }}>
            <InvitationScreenInfo title={"Диспетчер"} phone={"+7 (7212) 333 999"} />
            <InvitationScreenInfo title={"Горячая линия"} phone={"+7 (7212) 33 43 33"} />
            <InvitationScreenInfo title={"Запись на платные услуги"} phone={"+7 (7212) 33 40 04"} />
            <InvitationScreenInfo title={"Приемная"} phone={"+7 (7212) 33 42 20"} />
        </View>
    )
}

export default InvitationScreen;
