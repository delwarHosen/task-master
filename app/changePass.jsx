import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constant/colors';

export default function ChangePass() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();


  const handleChangePass = () => {
    console.log("Sign up")

    // router.push("/emailVerify")
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ margin: "2.5%" }}>
        <View style={styles.passChangeContainer}>
          <Pressable onPress={() => router.push("/accountSetting")} style={styles.iconWrapper}>
            <Ionicons name="chevron-back" size={24} color="#84C000" />
          </Pressable>
          <View>
            <Text style={styles.title}>Password Change</Text>
          </View>
        </View>


        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Type Password</Text>
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

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>New Password</Text>
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
          <Text style={styles.label}>Confirm New Password</Text>
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


        {/* Login button */}
        <TouchableOpacity style={styles.button} onPress={handleChangePass} disabled={isLoading} >
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

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFBF9'
  },
  passChangeContainer: {
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
    marginLeft: 70
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
  eyeIcon: {
    padding: 8,
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