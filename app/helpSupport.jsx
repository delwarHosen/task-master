import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { LayoutAnimation, Platform, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

// AccordionItem component
const AccordionItem = ({ title, children, isExpanded, onPress }) => {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={onPress} style={styles.titleContainer}>
                <Text style={styles.accordionTitle}>{title}</Text>
                <Text style={styles.icon}>{isExpanded ? <Ionicons name='chevron-down' color={"#84C000"} size={24} /> : <Ionicons name='chevron-forward' color={"#84C000"} size={24} />}</Text>
            </TouchableOpacity>
            {isExpanded && <View style={styles.content}>{children}</View>}
        </View>
    );
};

// Main help/support screen
export default function HelpSupport() {
    const router = useRouter();
    const [expandedIndex, setExpandedIndex] = useState(null); // Track which section is open

    const toggleExpand = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const faqData = [
        { title: "How do I create a new task?", content: "To create an account, click on Sign Up and fill the required fields." },
        { title: "How can I view task details?", content: "You can view task details by clicking on the task from your task list or dashboard.." },

        {
            title: "Can I mark a task as favorite or important?",
            content: "Yes, you can mark a task as favorite or important by tapping the star or flag icon next to the task."
        },
        {
            title: "How do I edit or delete a task?",
            content: "You can edit or delete a task by opening the task and selecting the Edit or Delete option."
        },
        {
            title: "Is my data secure?",
            content: "Yes, your data is secure. We use encryption and secure servers to protect your information."
        },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={{ padding: "2.5%" }}>
                {/* Header with back button */}
                <View style={styles.privecyContainer}>
                    <Pressable onPress={() => router.push("/profile")} style={styles.iconWrapper}>
                        <Ionicons name="chevron-back" size={24} color="#84C000" />
                    </Pressable>
                    <View>
                        <Text style={styles.headerTitle}>Help / Support</Text>
                    </View>
                </View>

                {/* Intro text */}
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>FAQs</Text>

                </View>

                {/* Accordion sections */}
                <View>
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            isExpanded={expandedIndex === index}
                            onPress={() => toggleExpand(index)}
                        >
                            <Text>{item.content}</Text>
                        </AccordionItem>
                    ))}
                </View>
                <View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FAFBF9',
    },
    privecyContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
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
    headerTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: "#000000",
        marginLeft: 60,
    },
    headerContainer: {
        marginVertical: 5,
        margin: "3%",
    },
    header: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
        color: "#2A2A2A",
    },
    item: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#ffffffff',
    },
    accordionTitle: {
        fontSize: 18,
        // fontWeight: 'bold',
    },
    icon: {
        fontSize: 16,
    },
    content: {
        padding: 15,
        backgroundColor: '#fff',
    },
});
