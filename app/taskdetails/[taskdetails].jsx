import { useLocalSearchParams, useRouter } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import taskData from '../../data/taskData.js';

export default function TaskDetails() {
    const router = useRouter();

    const { taskdetails } = useLocalSearchParams();
    const task = taskData.find(t => t._id.toString() === taskdetails);

    if (!task) return <Text>Task not found!</Text>;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.taskDetailContainer}>
                <Pressable onPress={() => router.push("/(tabs)")} style={styles.iconWrapper}>
                    <Ionicons name="chevron-back" size={24} color="#84C000" />
                </Pressable>
                <View>
                    <Text style={styles.title}>Task Details</Text>
                </View>
            </View>

            <View style={styles.card}>

                <View>
                    <View style={styles.taskTitleContainer}>
                        <View style={styles.titleIcon}>
                            <Ionicons name="calendar-sharp" size={24} color="#84C000" />
                        </View>

                        {/* FIX HERE */}
                        <View style={{ flex: 1 }}>
                            <Text style={styles.taskHeader}>Task Title</Text>
                            <Text style={styles.taskTitle}>{task.title}</Text>
                        </View>
                    </View>


                </View>

                {/* underline */}
                <View style={styles.divider} />

                <View>
                    <View style={styles.taskTitleContainer}>
                        <View style={styles.titleIcon}>
                            <Ionicons name="calendar-sharp" size={24} color="#84C000" />
                        </View>

                        {/* FIX HERE */}
                        <View style={{ flex: 1 }}>
                            <Text style={styles.taskHeader}>Task Description</Text>
                            <Text style={styles.taskTitle}>{task.description}</Text>
                        </View>
                    </View>

                    {/* underline */}
                    <View style={styles.divider} />

                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.deleteButton}>
                            <Ionicons name="trash-outline" color="#EF4444" size={18} />
                            <Text style={styles.deleteText}>Delete Task</Text>
                        </Pressable>

                        <Pressable
                            style={styles.editButton}
                            onPress={() => router.push(`/updatetasks/${task._id}`)}
                        >
                            <Ionicons name="create-outline" color="#84C000" size={18} />
                            <Text style={styles.editText}>Edit Task</Text>
                        </Pressable>
                    </View>

                </View>
            </View>

        </SafeAreaView >
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFBF9",
        // paddingHorizontal: "2%",
        margin: "2.5%"
    },

    taskDetailContainer: {
        flexDirection: "row",
        alignItems: "center",
        // gap: 50,               
    },
    iconWrapper: {
        backgroundColor: "#F7FFEF",
        padding: 6,
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 80
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 6,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: -1,
            height: -1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 24,
        elevation: 2,
        elevation: 4,
        marginTop: 20,
        // marginHorizontal: 10
    },
    taskTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    titleIcon: {
        marginBottom: 20
    },
    taskHeader: {
        fontSize: 14,
        fontWeight: "500",
    },
    taskTitle: {
        fontSize: 12,
        fontWeight: "500",
        color: "#6B7280",
        marginTop: 10
    }
    ,
    divider: {
        height: 1,
        backgroundColor: "#84C000",
        marginVertical: 20,
    },

    buttonContainer: {
        flexDirection: "row",
        gap: 8
    },
    deleteButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,

        width: 114,
        height: 36,
        borderRadius: 4,

        borderWidth: 1,          // ✅ FIX
        borderColor: "#EF4444",
        backgroundColor: "#FEF2F2",

        justifyContent: "center",
        marginBottom: 10,
    },

    deleteText: {
        color: "#EF4444",
        fontSize: 13,
        fontWeight: "500",
    },

    editButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,

        width: 114,
        height: 36,
        borderRadius: 4,

        borderWidth: 1,
        borderColor: "#84C000",
        backgroundColor: "#F7FFEF",

        justifyContent: "center",
    },

    editText: {
        color: "#84C000",
        fontSize: 13,
        fontWeight: "500",
    },

})