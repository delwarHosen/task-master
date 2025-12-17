import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function VerifyCode() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);

  const inputs = [];

  const router = useRouter();


  const handleVerifyEmail = () => {
    if (code.length !== 6) {
      alert("Please enter 6 digit verification code");
      return;
    }
    console.log("Verify Code:", code);
    router.push("/setNewPass")
  };


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* <SafeScreen> */}
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.title}>6-digit code</Text>
          <Text style={styles.description}>Please enter the code we've sent to michelle.rivera@example.com</Text>
        </View>


        <View style={""}>
          <View style={styles.formContainer}>
            {/* Verification Code */}
            <View style={styles.inputGroup}>

              <View style={styles.otpContainer}>
                {code.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => (inputs[index] = ref)}
                    style={styles.otpInput}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={digit}
                    placeholder="•"
                    placeholderTextColor="#9CA3AF"
                    textAlign="center"
                    onChangeText={(text) => {
                      const newCode = [...code];
                      newCode[index] = text;
                      setCode(newCode);

                      if (text && index < 5) {
                        inputs[index + 1].focus();
                      }
                    }}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === "Backspace" && !code[index] && index > 0) {
                        inputs[index - 1].focus();
                      }
                    }}
                  />
                ))}
              </View>
            </View>


            {/* Submit button */}
            <TouchableOpacity style={styles.button} onPress={handleVerifyEmail} disabled={isLoading} >
              {
                isLoading ? (
                  <ActivityIndicator color="#fff" />
                ) :
                  (
                    <Text style={styles.buttonText}>Confirm</Text>
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

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputGroup: {
    marginBottom: 20,
  },



  otpInput: {
    width: 46,
    height: 52,
    borderRadius: 10,
    backgroundColor: "#F7FFEF",

    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    color: "#6B7280",

    // iOS Shadow
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 24,
    shadowOffset: { width: 1, height: 1 },

    // Android Shadow
    elevation: 6,
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