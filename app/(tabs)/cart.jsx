import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function cart() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>cart</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}