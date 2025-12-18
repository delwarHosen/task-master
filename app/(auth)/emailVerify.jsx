import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import COLORS from '../../constant/colors';

export default function EmailVerify() {
    const { email: userEmail } = useLocalSearchParams();
    const [email, setEmail] = useState(userEmail || "");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();


    const handleVerifyEmail = () => {
        if (!email) {
            alert("Email is required");
            return;
        }

        console.log("Send verification code to:", email)
        router.push({
            pathname: '/verifyCode',
            params: { email }
        })
    }
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            {/* <SafeScreen> */}
            <View style={styles.container}>

                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Verify Your Email</Text>
                    <Text style={styles.description}>We'll send a verification code to this email to confirm your account.</Text>
                </View>


                <View style={""}>
                    <View style={styles.formContainer}>
                        {/* Email */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email Address</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your email"
                                    placeholderTextColor={COLORS.placeholderText}
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    editable={false}
                                />
                            </View>
                        </View>

                        {/* Login button */}
                        <TouchableOpacity style={styles.button} onPress={handleVerifyEmail} disabled={isLoading} >
                            {
                                isLoading ? (
                                    <ActivityIndicator color="#fff" />
                                ) :
                                    (
                                        <Text style={styles.buttonText}>Send</Text>
                                    )
                            }
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
            {/* </SafeScreen> */}
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#FAFBF9",
        padding: 20,
        justifyContent: "center",
        margin: "2%"
    },
    headerContainer: {
        marginBottom: 23
    },
    title: {
        // textAlign: "center",
        fontSize: 30,
        marginBottom: 10,
        fontWeight: "500",
        color: "#111827"
    },
    description: {
        color: "#6B7280",
        fontWeight: "400",
        fontSize: 14
    },

    formContainer: {
        marginBottom: 16,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        marginBottom: 6,
        color: "#111827",
        fontWeight: "500",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F7FFEF",
        borderRadius: 6,
        paddingVertical: 5,
        paddingHorizontal: 14,

        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 24,
        shadowOffset: { width: 1, height: 1 },

        elevation: 6,
    },

    input: {
        flex: 1,
        height: 40,
        color: "#6B7280",
    },


    button: {
        backgroundColor: "#84C000",
        borderRadius: 6,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 23,
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },

});