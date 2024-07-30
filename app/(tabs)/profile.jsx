import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Login from './login'

export default function profile() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Login />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}