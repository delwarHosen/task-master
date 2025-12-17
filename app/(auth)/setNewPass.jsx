import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import COLORS from '../../constant/colors';

export default function SetNewPass() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false)


  const handleNewPass = () => {
    console.log("Login")
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* <SafeScreen> */}
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.title}>Set Your New Password</Text>
          <Text style={styles.description}>Create a secure password to protect your account and get started seamlessly!</Text>
        </View>


        <View style={""}>
          <View style={styles.formContainer}>

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

            {/* set confirm Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>New Confirm Password</Text>
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

            {/* Login button */}
            <TouchableOpacity style={styles.button} onPress={handleNewPass} disabled={isLoading} >
              {
                isLoading ? (
                  <ActivityIndicator color="#fff" />
                ) :
                  (
                    <Text style={styles.buttonText}>Continue</Text>
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