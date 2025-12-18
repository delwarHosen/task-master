import { Ionicons } from '@expo/vector-icons'
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import {
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import COLORS from '../../constant/colors'
import { useLoginMutation } from '../../redux/feature/authApi.js'
// import { useLoginMutation } from '../../redux/api/authApi'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('123456')
    const [showPassword, setShowPassword] = useState(false)

    const router = useRouter()

    // RTK Query login mutation
    const [login, { isLoading }] = useLoginMutation()

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Email and password required')
            return
        }

        try {
            const res = await login({
                email: email.trim(),
                password: password.trim(),
            }).unwrap();
            console.log(res)
             router.push('/(tabs)')
        } catch (err) {
            console.log('Full login error:', JSON.stringify(err, null, 2));
            Alert.alert('Login Failed', err?.data?.message || 'Invalid credentials');
        }
    }

    // const handleLogin=()=>{
    //     router.replace('/(tabs)')
    // }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.container}>

                {/* Header */}
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Welcome Back!</Text>
                    <Text style={styles.description}>
                        Stay productive and take control of your tasks.
                    </Text>
                </View>

                {/* Form */}
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
                            />
                        </View>
                    </View>

                    {/* Password */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your password"
                                placeholderTextColor={COLORS.placeholderText}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                            />

                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                                style={styles.eyeIcon}
                            >
                                <Ionicons
                                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                                    size={20}
                                    color={COLORS.primary}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* OR */}
                    <View style={styles.orContainer}>
                        <View style={styles.orRow}>
                            <View style={styles.orLine} />
                            <Text style={styles.orText}>OR</Text>
                            <View style={styles.orLine} />
                        </View>
                    </View>

                    {/* Signup link */}
                    <View style={styles.signUpLoc}>
                        <Text style={styles.signupText}>
                            Don’t have an account?
                        </Text>
                        <Link href="/signup" asChild>
                            <TouchableOpacity>
                                <Text style={styles.link}>Sign Up</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>

                    {/* Login Button */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleLogin}
                        disabled={isLoading}
                    >
                        {
                            isLoading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={styles.buttonText}>Login</Text>
                            )
                        }
                    </TouchableOpacity>

                </View>
            </View>
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
    eyeIcon: {
        padding: 8,
    },

    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 12,
    },
    // check box
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#EA7D00",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
    },

    checked: {
        backgroundColor: "#EA7D00",
    },

    checkboxLabel: {
        fontSize: 14,
        color: "#FFFFFF",
    },


    orContainer: {
        alignItems: "center",
    },

    orRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
    },

    orLine: {
        borderBottomWidth: 2,
        borderBottomColor: "#64748B",
        width: 161,
    },

    orText: {
        marginHorizontal: 8,
        fontSize: 16,
        fontWeight: "600",
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
    signUpLoc: {
        flexDirection: "row",
        marginTop: 24,
    },
    signupText: {
        color: "#6B7280",
        marginRight: 5,
    },
    link: {
        color: "#84C000",
        fontWeight: "600",
    },
});