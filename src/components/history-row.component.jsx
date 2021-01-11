import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import RequestInfoItem from "../components/request-info-item.component";
import Rating from "../components/rating.component";

const place = {
    name: "Benh vien Tu Du",
    address: "284 Cống Quỳnh, P.Phạm Ngũ Lão, Q.1, Hồ Chí Minh"
};

const HistoryComponent = () => {
    const viewStateIcon = {
        false: require("../../assets/icons/details.png"),
        true: require("../../assets/icons/less.png")
    };
    const [viewState, setViewState] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.overview}>
                <View style={[styles.overviewItem, { flexBasis: "25%", marginRight: 30 }]}>
                    <Text style={styles.title}>Tổng quan:</Text>
                    <Text style={[styles.title, { fontSize: 9 }]}>14:38 10/01/2021</Text>
                    <View style={styles.requestType}>
                        <Icon size={14} color="#333" name="taxi" />
                        <Text style={styles.requestTypeValue}>Đi cấp cứu</Text>
                    </View>
                </View>
                <View style={[styles.overviewItem, { flex: 1 }]}>
                    <Text style={styles.title}>Trạng thái:</Text>
                    <Text style={[styles.title, { fontSize: 9 }]}>17:15 10/01/2021</Text>
                    <View style={styles.requestType}>
                        <Icon size={14} color="#333" name="street-view" />
                        <Text style={[styles.requestTypeValue, { backgroundColor: "#118539" }]}>
                            Thành công
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.locationOverview}>
                <View style={styles.iconContainer}>
                    <Icon size={18} color="#09acfe" name="chevron-circle-up" />
                    <Icon size={12} color="#555" name="ellipsis-v" />
                    <Icon size={12} color="#555" name="ellipsis-v" />
                    <Icon size={18} color="#f9650c" name="chevron-circle-down" />
                </View>
                <View>
                    <View style={[styles.location, { marginBottom: 10 }]}>
                        <Text style={styles.name}>{place.name}</Text>
                        <Text style={styles.address}>{place.address}</Text>
                    </View>
                    <View style={styles.location}>
                        <Text style={styles.name}>{place.name}</Text>
                        <Text style={styles.address}>{place.address}</Text>
                    </View>
                </View>
            </View>
            {viewState && (
                <>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.infoTitle}>Thông tin người gọi</Text>
                            <RequestInfoItem content="Ngô Hoàng Nam" icon="user-clock" />
                            <RequestInfoItem
                                content="0988635032"
                                icon="old-phone"
                                enabledNormalIcon
                            />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.infoTitle}>Thông tin người bệnh</Text>
                            <RequestInfoItem content="Trịnh Hoàng Kim Anh" icon="user-injured" />
                            <RequestInfoItem
                                content="0931738872"
                                icon="old-phone"
                                enabledNormalIcon
                            />
                        </View>
                    </View>
                    <Text style={styles.infoTitle}>Tình trạng</Text>
                    <RequestInfoItem content="Bị tai nạn giao thông rất nghiêm trọng" />
                    <Text style={styles.infoTitle}>Ghi chú</Text>
                    <RequestInfoItem content="Cần dụng cụ sơ cứu tại chỗ" />
                    <Text style={styles.infoTitle}>Đánh giá</Text>
                    <Rating level={5} size={8} />
                    <RequestInfoItem content="Tài xế chạy xe rất có tâm" />
                </>
            )}
            <TouchableOpacity
                onPress={() => setViewState(!viewState)}
                style={{ alignItems: "center", marginTop: 8 }}
            >
                <Image style={styles.more} source={viewStateIcon[viewState]} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    );
};

export default HistoryComponent;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#b3b9c8",
        marginVertical: 5
    },
    locationOverview: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginRight: 10
    },
    location: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    name: {
        color: "#26324a",
        fontFamily: "Texgyreadventor-bold"
    },
    address: {
        fontSize: 10,
        color: "#6c7fa6",
        marginBottom: 5,
        fontFamily: "Texgyreadventor-bold"
    },
    overview: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 5
    },
    overviewItem: {
        justifyContent: "flex-start"
    },
    title: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 11,
        color: "#6c7fa6"
    },
    requestType: {
        flexDirection: "row",
        alignItems: "center"
    },
    feedback: {
        fontFamily: "Texgyreadventor-regular",
        fontSize: 10
    },
    requestTypeValue: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 10,
        marginLeft: 2,
        backgroundColor: "#ff9d00",
        color: "#fff",
        paddingHorizontal: 8,
        borderRadius: 8
    },
    timeout: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 18,
        color: "#09acfe"
    },
    infoTitle: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 12,
        color: "#6c7fa6",
        marginTop: 5
    },
    more: {
        width: 55,
        height: 9
    },
    action: {
        fontFamily: "Texgyreadventor-bold",
        fontSize: 12,
        paddingHorizontal: 13,
        paddingVertical: 2,
        borderRadius: 12,
        backgroundColor: "rgba(52, 133, 13, 0.2)",
        color: "#34850d"
    },
    clear: {
        color: "#e7524d",
        fontFamily: "Texgyreadventor-bold",
        fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 12,
        backgroundColor: "rgba(231, 82, 77, 0.2)"
    }
});
