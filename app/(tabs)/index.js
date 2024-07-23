import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View className="bg-blue-200 h-screen items-center justify-center">
                    <Text className="text-red-500 text-4xl">Hello World!</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}