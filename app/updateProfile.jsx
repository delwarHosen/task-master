import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constant/colors';

export default function updateProfile() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false)


    const router = useRouter();

    const handleUpdateProFile = () => {
        console.log("")
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={{ margin: "2.5%" }}>
                <View style={styles.updateChangeContainer}>
                    <Pressable onPress={() => router.push("/myProfile")} style={styles.iconWrapper1}>
                        <Ionicons name="chevron-back" size={24} color="#84C000" />
                    </Pressable>
                    <View style={{ width: "100%" }}>
                        <Text style={styles.title}>Edit Profile</Text>
                    </View>
                </View>


                {/* Profile image */}
                <View style={styles.profileContainer}>
                    <Image
                        style={styles.profileImage}
                        source={require("../assets/images/profileImage.png")}
                        resizeMode="cover"
                    />

                    {/* Camera Icon */}
                    <View style={styles.iconWrapper}>
                        <Ionicons name="camera-outline" size={20} color="#84C000" />
                    </View>
                </View>


                {/* First name */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>First Name</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="e.g. Kristin "
                            placeholderTextColor={COLORS.textSecondary}
                            value={""}
                            onChangeText={""}
                            keyboardType="Name"
                            autoCapitalize="none"
                        />
                    </View>
                </View>

                {/* Last name */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Last Name</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="e.g. Cooper"
                            placeholderTextColor={COLORS.textSecondary}
                            value={""}
                            onChangeText={""}
                            keyboardType="Name"
                            autoCapitalize="none"
                        />
                    </View>
                </View>

                {/* Email */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email Address</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="e.g. kristin.cooper@example.com"
                            placeholderTextColor={COLORS.placeholderText}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                </View>


                {/* Address */}
                <View style={styles.inputGroup}>
                    <Text style={styles.label}> Address</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="e.g. 1234 Elm Street, Springfield, IL"
                            placeholderTextColor={COLORS.placeholderText}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                </View>


                {/* Login button */}
                <TouchableOpacity style={styles.button} onPress={handleUpdateProFile} disabled={isLoading} >
                    {
                        isLoading ? (
                            <ActivityIndicator color="#fff" />
                        ) :
                            (
                                <Text style={styles.buttonText}>Update</Text>
                            )
                    }
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FAFBF9'
    },
    updateChangeContainer: {
        flexDirection: "row",
        alignItems: "center",
        // gap: 50,               
    },


    title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#000000",
        marginLeft: 100
    },

    iconWrapper1: {
        backgroundColor: "#F7FFEF",
        padding: 8,
        height: 36,
        width: 36,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 24,
        shadowOffset: { width: 1, height: 1 },
        elevation: 6,
    },

    profileContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginTop:20
    },

    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#ffffff",
    },

    iconWrapper: {
        position: "absolute",
        bottom: 0,
        right: 135,
        backgroundColor: "#F7FFEF",
        padding: 3,
        height: 26,
        width: 26,
        borderRadius: 13,
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 24,
        shadowOffset: { width: 1, height: 1 },
        elevation: 6,
    },


    inputGroup: {
        marginTop: 20,
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

})