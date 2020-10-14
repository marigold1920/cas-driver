import React from "react";
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    SafeAreaView,
    StatusBar,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ButtonText from "../../components/button-text.component";
import Icon from "react-native-vector-icons/FontAwesome";

function AcceptRequestScreen(props) {
    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                }}
            >
                <ImageBackground
                    source={require("../../../assets/icons/background.png")}
                    style={styles.image}
                >
                    {/* Header */}
                    <View style={styles.headerView}>
                        <ImageBackground
                            source={require("../../../assets/icons/header-accept-request.png")}
                            style={{
                                width: "100%",
                                flexDirection: "row",
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 15,
                                        color: "blue",
                                    }}
                                >
                                    ĐÓN BỆNH NHÂN
                                </Text>
                                <Text style={{ fontSize: 15, marginTop: 10 }}>
                                    Huy
                                </Text>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: "green",
                                    }}
                                >
                                    ĐẾN NƠI
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    {/* Info */}
                    <View style={styles.infoView}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                            }}
                        >
                            <View
                                style={{
                                    flex: 4,
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        marginLeft: 10,
                                    }}
                                    numberOfLines={1}
                                >
                                    Bệnh viện Quân Y
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 15,
                                        marginLeft: 10,
                                    }}
                                    numberOfLines={2}
                                >
                                    365, Lê Văn Việt, Quận 9, TP.Hồ Chí Minh
                                </Text>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Icon name="location-arrow" size={35} />
                            </View>
                        </View>
                        {/* Note */}
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "column",
                                backgroundColor: "white",
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    marginLeft: 10,
                                    fontSize: 18,
                                }}
                            >
                                Ghi chú:
                            </Text>
                            <Text style={{ marginLeft: 20, fontSize: 15 }}>
                                Bệnh nhân cần người sơ cứu, vì đang bị gãy chân
                            </Text>
                        </View>
                    </View>
                    {/* Map */}
                    <View style={{ flex: 4 }}>
                        <MapView
                            mapType={
                                Platform.OS == "android" ? "none" : "standard"
                            }
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1 }}
                            showsUserLocation={true}
                            showsMyLocationButton={true}
                        />
                    </View>
                    {/* Call, Exit... */}
                    <View style={styles.footerView}>
                        <View
                            style={{
                                flex: 3,
                                flexDirection: "row",
                            }}
                        >
                            <View style={styles.layoutIconAndText}>
                                <MaterialIcons name="local-phone" size={50} />
                                <Text>Gọi</Text>
                            </View>
                            <View style={styles.layoutIconAndText}>
                                <MaterialIcons name="cancel" size={50} />
                                <Text>Hủy</Text>
                            </View>
                        </View>
                        <View style={{ flex: 2, flexDirection: "row" }}>
                            <ButtonText
                                textContent="Điểm đến"
                                styleButton={styles.buttonGoTo}
                                styleText={{
                                    fontWeight: "bold",
                                    color: "blue",
                                    fontSize: 17,
                                }}
                            />
                            <ButtonText
                                textContent="Đón bệnh nhân"
                                styleButton={styles.buttonGetPatient}
                                gotoScreen={() =>
                                    props.navigation.navigate("PatientArrived")
                                }
                                styleText={{
                                    fontWeight: "bold",
                                    color: "white",
                                    fontSize: 17,
                                }}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    headerView: {
        flex: 2,
        flexDirection: "row",
    },
    infoView: {
        flex: 3,
    },
    mapView: {
        flex: 4,
    },
    footerView: {
        flex: 4,
        alignItems: "center",
    },
    layoutIconAndText: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonGetPatient: {
        borderRadius: 8,
        width: 150,
        backgroundColor: "green",
        marginLeft: 20,
    },
    buttonGoTo: {
        width: 100,
        borderRadius: 8,
    },
});

export default AcceptRequestScreen;
