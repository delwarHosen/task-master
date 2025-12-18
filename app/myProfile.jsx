import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function MyProfile() {
    const router = useRouter()
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                <View style={styles.profileNav}>
                    <Pressable
                        onPress={() => router.push("/profile")}
                        style={styles.iconWrapper}>
                        <Ionicons name="chevron-back" size={24} color="#84C000" />
                    </Pressable>
                    <Text style={styles.navText}>Profile</Text>
                    <Pressable
                        onPress={() => router.push("/updateProfile")}
                        style={styles.iconWrapper}>
                        <Ionicons name="create-outline" color="#84C000" size={24} />
                    </Pressable>
                </View>

                {/* Profile image */}
                <View>
                    <Image
                        style={styles.profileImage}
                        source={require("../assets/images/profileImage.png")}
                        resizeMethod='cover'
                    />
                    <Text style={styles.authorText}>Mojahid</Text>
                </View>

                {/* Nav list */}
                <View style={{ width: "100%" }}>
                    <Pressable style={styles.navContainer}>
                        <View style={styles.navItem}>
                            <Ionicons name='person-circle-outline' size={24} color="#84C000" />
                            <Text style={styles.textBar}>|</Text>
                            <Text style={{ color: "#111827" }}>Mojahid</Text>
                        </View>

                    </Pressable>

                    <Pressable style={styles.navContainer}>
                        <View style={styles.navItem}>
                            <Ionicons name='at-outline' size={24} color="#84C000" />
                            <Text style={styles.textBar}>|</Text>
                            <Text style={{ color: "#111827" }}>Samaltman@gmail.com</Text>
                        </View>

                    </Pressable>

                    <Pressable style={styles.navContainer}>
                        <View style={styles.navItem}>
                            <Ionicons name='location-outline' size={24} color="#84C000" />
                            <Text style={styles.textBar}>|</Text>
                            <Text style={{ color: "#111827" }}>1234 Elm Street, Springfield, IL</Text>
                        </View>


                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FAFBF9'
    },
    container: {
        flex: 1,
        // padding: 10,
        margin: "2.5%",
        // justifyContent: 'center',
        alignItems: 'center',
        margin: "2.5%"
    },
    profileNav: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"

    },
    iconWrapper: {
        backgroundColor: "#F7FFEF",
        padding: 10,
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 24,
        shadowOffset: { width: 1, height: 1 },

        elevation: 6,
    },
    navText: {
        color: "#84C000",
        fontSize: 18,
        fontWeight: "600"
    },
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#ffffff",
        marginTop: 20
    },
    authorText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#232323",
        marginTop: 10,
        textAlign: "center"
    },

    navContainer: {
        width: "100%",
        height: 60,
        borderRadius: 6,
        backgroundColor: "#FFFFFF",
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,

        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 24,
        shadowOffset: { width: 1, height: 1 },

        elevation: 6,
    },

    navItem: {
        flexDirection: "row",
        justifyContent: 'space-between',
        gap: 20,
        alignItems: 'center'
    },
    textBar: {
        color: "#84C000",
        marginHorizontal: 8,
        fontSize: 18
    }
})