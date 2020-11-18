import React from "react";

import { View, Image, StyleSheet } from "react-native";

const BackgroundImage = props => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={require("../../assets/images/bg-main.png")}
            />
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: " 100%",
        height: "100%"
    },
    backgroundImage: {
        position: "absolute",
        zIndex: 0
    }
});

export default BackgroundImage;
