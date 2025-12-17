import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function OnBordingSlide({ item }) {
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        // paddingHorizontal: 20,
    },
    image: {
        width: 280,
        height: 280,
        // marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
        marginTop: 40,
        color: "#111827",
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        color: "#6B7280",
        marginHorizontal: 45,
        marginTop:10
    },
});
