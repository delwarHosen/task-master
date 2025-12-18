import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import COLORS from '../../constant/colors';
import { useAddTaskMutation } from '../../redux/feature/tasksApi';
// import { useAddTaskMutation } from '../../redux/tasksApi'; 

export default function AddTask() {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const [addTask, { isLoading }] = useAddTaskMutation(); 

    const handleAddTask = async () => {
        if (!task || !description) {
            alert("Please fill in both title and description");
            return;
        }

        try {
            await addTask({ title: task, description }).unwrap();
            alert("Task added successfully!");
            router.push("/(tabs)"); 
        } catch (err) {
            console.error(err);
            alert("Failed to add task");
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.container}>
                <View style={styles.taskDetailContainer}>
                    <Pressable onPress={() => router.push("/(tabs)")} style={styles.iconWrapper}>
                        <Ionicons name="chevron-back" size={24} color="#84C000" />
                    </Pressable>
                    <View>
                        <Text style={styles.title}>Add Task</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.formContainer}>
                        {/* Task Title */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Task Title</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="e.g. Design Landing Page Header"
                                    placeholderTextColor={COLORS.placeholderText}
                                    value={task}
                                    onChangeText={setTask}
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

                        {/* Description */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Description</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.TextDes}
                                    placeholder="e.g. Design Landing Page Header"
                                    placeholderTextColor={COLORS.placeholderText}
                                    value={description}
                                    onChangeText={setDescription}
                                    multiline
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

                        {/* Submit button */}
                        <TouchableOpacity style={styles.button} onPress={handleAddTask} disabled={isLoading}>
                            {isLoading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={styles.buttonText}>Save Task</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}



const styles = StyleSheet.create({
    container: {
        // flexGrow: 1,
        backgroundColor: "#FAFBF9",
        padding: 20,
        justifyContent: "center",
        margin: "2%"

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
        marginLeft: 100
    },


    headerContainer: {
        marginBottom: 23
    },

    description: {
        color: "#6B7280",
        fontWeight: "400",
        fontSize: 14
    },

    formContainer: {
        marginBottom: 16,
        marginTop: 20
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
        width: "100%",
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

    TextDes: {
        flex: 1,
        textAlignVertical: "top",
        color: "#111827",
        fontSize: 14,
        minHeight: 100,
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