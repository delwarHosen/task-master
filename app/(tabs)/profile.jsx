import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ActivityIndicator, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetMyProfileQuery } from '../../redux/feature/authApi';

export default function Profile() {
  const router = useRouter();
  const { data, error, isLoading } = useGetMyProfileQuery();

console.log(data)

  if (isLoading) return <ActivityIndicator size="large" color="#84C000" style={{ flex: 1 }} />;
  if (error) return <Text style={{ padding: 20 }}>Failed to load profile</Text>;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={data?.profileImage ? { uri: data.profileImage } : require("../../assets/images/profileImage.png")}
          resizeMethod='none'
        />

        <View style={{ width: "100%" }}>
          <Pressable
            onPress={() => router.push("/myProfile")}
            style={styles.navContainer}>
            <View style={styles.navItem}>
              <Ionicons name='person-circle-outline' size={24} color="#84C000" />
              <Text style={{ color: "#111827" }}>My Profile</Text>
            </View>

            <View style={styles.navItem}>
              <Ionicons name='chevron-forward' size={24} color="#84C000" />
            </View>
          </Pressable>

          <Pressable
            onPress={() => router.push("/accountSetting")}
            style={styles.navContainer}>
            <View style={styles.navItem}>
              <Ionicons name='settings-outline' size={24} color="#84C000" />
              <Text style={{ color: "#111827" }}>Account Setting</Text>
            </View>

            <View style={styles.navItem}>
              <Ionicons name='chevron-forward' size={24} color="#84C000" />
            </View>
          </Pressable>


          <View>
            <Text style={{
              fontSize: 16,
              fontWeight: "bold",
              marginVertical: 20,
              marginLeft: 10,
              textAlign: "left"
            }}>More</Text>
          </View>


          <Pressable onPress={() => router.push("/termCondition")} style={styles.navContainer}>
            <View style={styles.navItem}>
              <Ionicons name='document-text-outline' size={24} color="#84C000" />
              <Text style={{ color: "#111827" }}>Terms & Condition</Text>
            </View>

            <View style={styles.navItem}>
              <Ionicons name='chevron-forward' size={24} color="#84C000" />
            </View>
          </Pressable>


          <Pressable onPress={() => router.push("/privecyPolicy")} style={styles.navContainer}>
            <View style={styles.navItem}>
              <Ionicons name='clipboard-outline' size={24} color="#84C000" />
              <Text style={{ color: "#111827" }}>Privacy policy</Text>
            </View>

            <View style={styles.navItem}>
              <Ionicons name='chevron-forward' size={24} color="#84C000" />
            </View>
          </Pressable>

          <Pressable onPress={() => router.push("/helpSupport")} style={styles.navContainer}>
            <View style={styles.navItem}>
              <Ionicons name='help-circle-outline' size={24} color="#84C000" />
              <Text style={{ color: "#111827" }}>Help/Support</Text>
            </View>

            <View style={styles.navItem}>
              <Ionicons name='chevron-forward' size={24} color="#84C000" />
            </View>
          </Pressable>

          <Pressable style={styles.navContainer}>
            <View style={styles.navItem}>
              <Ionicons name='log-out-outline' size={24} color="#84C000" />
              <Text style={{ color: "#111827" }}>Log Out</Text>
            </View>

            <View style={styles.navItem}>
              <Ionicons name='chevron-forward' size={24} color="#84C000" />
            </View>
          </Pressable>

        </View>

      </View>


    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFBF9'
  },
  container: {
    flex: 1,
    // padding: 10,
    margin: "2.5%",
    justifyContent: 'center',
    alignItems: 'center',
    margin: "2.5%"
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ffffff"
  },
  navContainer: {
    width: "100%",
    height: 60,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 24,
    shadowOffset: { width: 1, height: 1 },

    elevation: 6,
  },
  navItem: {
    flexDirection: "row",
    justifyContent: 'space-between',
    gap: 20,
    alignItems: 'center'
  }
});
