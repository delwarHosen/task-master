import { StyleSheet } from "react-native";
import COLORS from "../../constant/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    btn: {
        width: 200,
        height: 200,
        backgroundColor: COLORS.primary,
        // backgroundColor: "#84C000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
    }
})

export default styles