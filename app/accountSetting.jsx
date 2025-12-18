import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AccountSetting() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={{ margin: "2.5%" }}>
                <View style={styles.taskDetailContainer}>
                    <Pressable onPress={() => router.push("/profile")} style={styles.iconWrapper}>
                        <Ionicons name="chevron-back" size={24} color="#84C000" />
                    </Pressable>
                    <View>
                        <Text style={styles.title}>Account Setting</Text>
                    </View>
                </View>


                <View style={{ width: "100%" }}>
                    <Pressable
                        onPress={() => router.push("/changePass")}
                        style={styles.navContainer}>
                        <View style={styles.navItem}>
                            <Ionicons name='person-circle-outline' size={24} color="#84C000" />
                            <Text style={{ color: "#111827" }}>Change Password</Text>
                        </View>

                        <View style={styles.navItem}>
                            <Ionicons name='chevron-forward' size={24} color="#84C000" />
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => router.push("/accountSetting")}
                        style={styles.navContainer}>
                        <View style={styles.navItem}>
                            <Ionicons name='trash-bin-outline' size={24} color="#FF0000" />
                            <Text style={{ color: "#FF0000" }}>Delete Account</Text>
                        </View>

                        <View style={styles.navItem}>
                            <Ionicons name='chevron-forward' size={24} color="#84C000" />
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
    taskDetailContainer: {
        flexDirection: "row",
        alignItems: "center",
        // gap: 50,               
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
    title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#000000",
        marginLeft: 80
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
    }

})