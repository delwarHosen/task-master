import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import COLORS from '../../constant/colors';

export default function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();


  const handleSignup = () => {
    console.log("Sign up")

    router.push("/emailVerify")
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* <SafeScreen> */}
      <ScrollView >
        <View style={styles.container}>

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Create Your Account</Text>
            <Text style={styles.description}>Join Task Manager today — organize better, work smarter, and stay in control of your day.</Text>
          </View>


          <View style={""}>
            <View style={styles.formContainer}>

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
                      name={showPassword ? "eye-outline" : "eye-off-outline"}
                      size={20}
                      color={COLORS.primary}
                    />
                  </TouchableOpacity>
                </View>
              </View>


              {/* Confirm Password */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor={COLORS.textSecondary}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                  >
                    <Ionicons
                      name={showPassword ? "eye-outline" : "eye-off-outline"}
                      size={20}
                      color={COLORS.primary}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Remind me */}
              {/* <TouchableOpacity
                                    style={styles.checkboxContainer}
                                    onPress={() => onChange(!value)}
                                    activeOpacity={0.8}
                                >
                                    <View style={[styles.checkbox, value && styles.checked]}>
                                        {value && (
                                            <Ionicons name="checkmark" size={16} color="#fff" />
                                        )}
                                    </View>

                                    <Text style={styles.checkboxLabel}>{label}</Text>
                                </TouchableOpacity> */}


              <View style={styles.orContainer}>
                <View style={styles.orRow}>
                  <View style={styles.orLine} />
                  <Text style={styles.orText}>OR</Text>
                  <View style={styles.orLine} />
                </View>
              </View>


              <View style={styles.signUpLoc}>
                <Text style={styles.signupText}>Already have an accounr?</Text>
                <Link href="/(auth)" asChild>
                  <TouchableOpacity>
                    <Text style={styles.link}>Login</Text>
                  </TouchableOpacity>
                </Link>
              </View>

              {/* Login button */}
              <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={isLoading} >
                {
                  isLoading ? (
                    <ActivityIndicator color="#fff" />
                  ) :
                    (
                      <Text style={styles.buttonText}>Sign up</Text>
                    )
                }
              </TouchableOpacity>



            </View>
          </View>

        </View>
      </ScrollView>
      {/* </SafeScreen> */}
    </KeyboardAvoidingView>
  )
}




const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FAFBF9",
    paddingVertical: 60,
    paddingHorizontal: 16,
    margin: "2%"
  },
  scrollContainer: {
    flexGrow: 1,
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