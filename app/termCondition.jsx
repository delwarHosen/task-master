import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function TermCondition() {
    const router = useRouter()
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={{ padding: "2.5%" }}>
                <View style={styles.TermContainer}>
                    <Pressable onPress={() => router.push("/profile")} style={styles.iconWrapper}>
                        <Ionicons name="chevron-back" size={24} color="#84C000" />
                    </Pressable>
                    <View>
                        <Text style={styles.title}>Terms & Condition</Text>
                    </View>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Terms & Conditions</Text>
                    <Text>Welcome to the Task Manager App. By accessing or using this application, you agree to the following terms and conditions:</Text>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.header}>1. Use of the App</Text>
                    <Text>This app is designed to help users create, manage, and track personal or professional tasks efficiently. By using the app, you agree to use it responsibly and only for lawful purposes.</Text>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.header}>2. Accuracy of Information</Text>
                    <Text>All tasks, notes, and other information entered by the user are stored securely. While we strive to maintain accurate task management functionality, the app is not responsible for missed deadlines, incorrect entries, or user-generated errors.</Text>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.header}>3. User Responsibility</Text>
                    <Text>Users are solely responsible for managing their tasks, reminders, and any personal or professional outcomes related to the completion or non-completion of tasks created within the app.</Text>
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.header}>4. Data Collection</Text>
                    <Text>We respect your privacy. The Task Manager App may collect limited personal data (such as name, email, and usage patterns) solely for improving user experience. No data is shared with third parties without user consent.</Text>
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>5. Limitation of Liability</Text>
                    <Text>We are not liable for any loss of productivity, missed deadlines, or damages resulting from your use of the app. The app is a productivity tool and should be used at your discretion.</Text>
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>6. Third-Party Links</Text>
                    <Text>If the app connects to any third-party tools (e.g., calendar, email), we are not responsible for their data policies or service availability. Use of such services is subject to their respective terms.</Text>
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>7. Changes to Terms</Text>
                    <Text>We reserve the right to update these Terms & Conditions at any time. Continued use of the app following any changes will constitute your acceptance of those revised terms.</Text>
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
    TermContainer: {
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
