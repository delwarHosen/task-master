import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import styles from "../assets/styles/start.styles";

export default function StartScreen() {
  const router = useRouter();

  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push("/onboarding/screen")}
      >
        <Ionicons name="checkmark-sharp" size={130} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
