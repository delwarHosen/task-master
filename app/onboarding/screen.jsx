import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import OnBordingSlide from "../../components/OnBording";
import slides from "../../utils/slides";

const { width } = Dimensions.get("window");

const OnboardingScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);
    const router = useRouter();

    // Track current visible slide
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    // Scroll to next slide
    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
                viewPosition: 0, // align to start
            });
        } else {
            router.push("/(auth)");
        }
    };

    // Scroll to previous slide
    const handleBack = () => {
        if (currentIndex > 0) {
            flatListRef.current?.scrollToIndex({
                index: currentIndex - 1,
                animated: true,
                viewPosition: 0,
            });
        }
    };

    // Skip onboarding
    const handleSkip = () => {
        router.push("/(auth)");
    };

    // Fallback if scrollToIndex fails
    const onScrollToIndexFailed = (info) => {
        flatListRef.current?.scrollToOffset({
            offset: info.averageItemLength * info.index,
            animated: true,
        });
    };

    return (
        <View style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                {currentIndex > 0 ? (
                    <TouchableOpacity onPress={handleBack}>
                        <Ionicons name="arrow-back" size={24} color="#333" />
                    </TouchableOpacity>
                ) : (
                    <View style={{ width: 28 }} />
                )}

                <TouchableOpacity onPress={handleSkip}>
                    <Text style={styles.topButtonText}>Skip</Text>
                </TouchableOpacity>
            </View>

            {/* Slides */}
            <FlatList
                ref={flatListRef}
                data={slides}
                renderItem={({ item }) => <OnBordingSlide item={item} />}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                getItemLayout={(data, index) => ({ length: width, offset: width * index, index })}
                onScrollToIndexFailed={onScrollToIndexFailed}
                style={{ flex: 1 }}
            />

            {/* Dots + Bottom Button */}
            <View style={styles.bottomContainer}>
                <View style={{ alignItems: "center", marginBottom: 15 }}>
                    <View style={styles.dotsContainer}>
                        {slides.map((_, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.dot, currentIndex === index && styles.activeDot]}
                                onPress={() =>
                                    flatListRef.current?.scrollToIndex({
                                        index,
                                        animated: true,
                                        viewPosition: 0,
                                    })
                                }
                            />
                        ))}
                    </View>
                </View>
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.buttonText}>
                        {currentIndex === slides.length - 1 ? "Continue" : "Next"}{" "}
                        <Ionicons name="chevron-forward" size={16} color="#fff" />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFBF9",
        paddingTop: 50,
        justifyContent: "space-between",
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
    },
    topButtonText: {
        fontSize: 16,
        color: "#84C000",
    },
    bottomContainer: {
        paddingHorizontal: 20,
        paddingBottom: 40,
        justifyContent: "flex-end",
    },
    dotsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 130,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#ccc",
        marginHorizontal: 6,
    },
    activeDot: {
        backgroundColor: "#84C000",
        width: 28,
        borderRadius: 5,
    },
    nextButton: {
        backgroundColor: "#84C000",
        paddingVertical: 15,
        borderRadius: 6,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        flexDirection: "row",
    },
});
