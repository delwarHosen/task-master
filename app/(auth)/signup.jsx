import { Ionicons } from '@expo/vector-icons';
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import COLORS from '../../constant/colors';
import { useRegisterMutation } from '../../redux/feature/authApi';


export default function Signup() {
  const [register] = useRegisterMutation();
  const [file, setFile] = useState(null);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  console.log("dataaa",form)
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // File picker

  const pickImage = async () => {
    try {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Permission Denied',
            'We need camera roll permissions to upload an image'
          );
          return;
        }
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
        base64: true,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);

        if (result.assets[0].base64) {
          setImageBase64(result.assets[0].base64);
        } else {
          const base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, {
            encoding: FileSystem.EncodingType.Base64,
          });
          setImageBase64(base64);
        }
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'There was a problem selecting your image');
    }
  };


  const handleSignup = async () => {
    if (!form.firstName || !form.lastName || !form.email || !form.address || !form.password || !form.confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert('Password does not match');
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('firstName', form.firstName);
      formData.append('lastName', form.lastName);
      formData.append('email', form.email);
      formData.append('address', form.address);
      formData.append('password', form.password);
      formData.append('confirmPassword', form.confirmPassword);

      if (file) {
        formData.append('image', {
          uri: file.uri,
          name: file.name,
          type: file.type,
        });
      }

      const res = await register(formData).unwrap();
      alert('Registration successful!');
      router.push('/(auth)');
    } catch (err) {
      console.log(err);
      alert(err?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Create Your Account</Text>
            <Text style={styles.description}>
              Join Task Manager today — organize better, work smarter, and stay
              in control of your day.
            </Text>
          </View>

          <View style={styles.formContainer}>
            {/* First Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>First Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. Kristin"
                  placeholderTextColor={COLORS.textSecondary}
                  value={form.firstName}
                  onChangeText={(v) => setForm({ ...form, firstName: v })}
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Last Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Last Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. Cooper"
                  placeholderTextColor={COLORS.textSecondary}
                  value={form.lastName}
                  onChangeText={(v) => setForm({ ...form, lastName: v })}
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
                  value={form.email}
                  onChangeText={(v) => setForm({ ...form, email: v })}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Address */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Address</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="e.g. 1234 Elm Street, Springfield, IL"
                  placeholderTextColor={COLORS.placeholderText}
                  value={form.address}
                  onChangeText={(v) => setForm({ ...form, address: v })}
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
                  value={form.password}
                  onChangeText={(v) => setForm({ ...form, password: v })}
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

            {/* Confirm Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor={COLORS.textSecondary}
                  value={form.confirmPassword}
                  onChangeText={(v) =>
                    setForm({ ...form, confirmPassword: v })
                  }
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


            {/* <View style={styles.inputGroup}>
              <Text style={styles.label}>Upload Image</Text>
              <TouchableOpacity
                style={styles.inputContainer}
                onPress={pickImage}
              >
                <Text style={[styles.input, { color: file ? '#111827' : COLORS.textSecondary }]}>
                  {file ? file.name : 'Choose an image'}
                </Text>
              </TouchableOpacity>
            </View> */}

            {/* IMAGE */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Book Image</Text>
              <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
                {image ? (
                  <Image source={{ uri: image }} style={{ height: "100%", width: "100%" }} />
                ) : (
                  <View style={styles.placeholderContainer}>
                    <Ionicons name="image-outline" size={40} color={COLORS.textSecondary} />
                    <Text style={""}>Tap to select image</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>


            {/* Already have account */}
            <View style={styles.signUpLoc}>
              <Text style={styles.signupText}>Already have an account?</Text>
              <Link href="/(auth)" asChild>
                <TouchableOpacity>
                  <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
              </Link>
            </View>

            {/* Signup Button */}
            <TouchableOpacity
              style={styles.button}
              onPress={handleSignup}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Sign up</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
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


  imagePicker: {
    width: "100%",
    height: 200,
    backgroundColor: "",
    borderRadius: 12,
    borderWidth: 1,
    // borderColor: COLORS.border,
    overflow: "hidden",
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