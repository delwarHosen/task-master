import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function PrivecyPolicy() {
    const router = useRouter()
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={{ padding: "2.5%" }}>
                <View style={styles.privecyContainer}>
                    <Pressable onPress={() => router.push("/profile")} style={styles.iconWrapper}>
                        <Ionicons name="chevron-back" size={24} color="#84C000" />
                    </Pressable>
                    <View>
                        <Text style={styles.title}>Privacy policy</Text>
                    </View>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Privacy Policy & Task Manager App</Text>
                    <Text>Your privacy is important to us. This Privacy Policy outlines how the Task Manager App handles your information and protects your data.</Text>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.header}>1. Information Collection</Text>
                    <Text>The Task Manager App may collect limited information such as your name, email address, and preferences — strictly for the purpose of enhancing your task management experience. We do not collect sensitive personal information unnecessarily.</Text>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.header}>2. Local Storage</Text>
                    <Text>Your tasks, subtasks, and user preferences are securely stored in our system or locally on your device (depending on platform settings). This data is used solely to support the app's features like scheduling, notifications, and user customization.</Text>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.header}>3. No Tracking</Text>
                    <Text>We do not use third-party trackers or intrusive analytics tools to monitor your behavior. Any performance monitoring is strictly anonymized and used internally to improve the app experience.</Text>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.header}>4. Static Data Display</Text>
                    <Text>If the app integrates with external tools (e.g., calendar, cloud storage), those services are governed by their own privacy policies. We do not control or assume responsibility for their data handling practices.</Text>
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>5. Third-Party Services</Text>
                    <Text>We implement industry-standard measures to ensure your information is protected from unauthorized access, alteration, or misuse. This includes encryption, secure servers, and routine maintenance.</Text>
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>6. Data Security</Text>
                    <Text>You retain full control over your account data. You can delete or export your tasks and personal information at any time through your profile settings (if applicable)..</Text>
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>7. Policy Updates</Text>
                    <Text>This Privacy Policy may be updated periodically. Any changes will be clearly communicated within the app. Continued use after updates indicates your acceptance of the revised policy.
                    </Text>

                    <Text style={{ marginTop: 10 }}>if you have any questions or concerns regarding privacy, please contact us at </Text>
                    <Text style={{ textDecorationLine: 'underline' }}>
                        support@taskmanagerapp.com
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FAFBF9'
    },
    privecyContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
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
        marginLeft: 20
    },
    headerContainer: {
        marginVertical: 5,
        margin: "3%"
    },
    header: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 10,
        marginBottom: 10,
        color: "#2A2A2A"
    }
})
