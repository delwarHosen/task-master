import { useRouter } from 'expo-router';
import { ActivityIndicator, FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import taskData from '../../data/taskData.js';
// import { taskItems } from "../../data/taskData.js"
import { useGetAllTasksQuery } from '../../redux/feature/tasksApi';


export default function Home() {
    const router = useRouter();

    const { taskData, error, isLoading } = useGetAllTasksQuery();
    console.log(taskData)

    if (isLoading) return <ActivityIndicator size="large" color="#84C000" />;
    if (error) return <Text>Error loading tasks</Text>;

    // console.log(taskData)
    const renderItem = ({ item }) => (
        <Pressable onPress={() => router.push(`/taskdetails/${item._id}`)}>
            <ImageBackground
                source={require("../../assets/images/bgCard.png")}
                style={styles.taskDataDetails}
                imageStyle={{ borderRadius: 10 }}
                resizeMode="cover"
            >
                <Image style={styles.bookLogo} source={require("../../assets/images/bookLogo.png")} />
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookDescription}>{item.description}</Text>
            </ImageBackground>
        </Pressable>
    );


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userContainer}>
                <Image source={require("../../assets/images/avatar.png")} style={styles.avatar} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Hello Mojahid</Text>
                    <Text >Welcome to Task Manager </Text>
                </View>
            </View>
            <View style={styles.taskDataContainer}>
                <Text style={styles.topTitle}>My Task</Text>
                <View>
                    <FlatList
                        data={taskData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item._id.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    />
                </View>

            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFBF9",
        paddingHorizontal: "2%",
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        // margin: 16,
        marginVertical: 4,
        borderRadius: 8,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 20,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontWeight: "bold",
        color: "#000000ff",
    },
    topTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#000000"
    },

    taskDataContainer: {
        flex: 1,
        margin: "2%",
    },
    taskDataDetails: {
        // width: "100%",
        padding: 16,
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 16,
    },
    bookLogo: {
        width: 26,
        height: 26,
        marginBottom: 10
    },
    bookTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#111827",
        flexShrink: 1,
    },
    bookDescription: {
        fontSize: 14,
        marginBottom: 10,
        color: "#6B7280",
        flexShrink: 1,
    },
})