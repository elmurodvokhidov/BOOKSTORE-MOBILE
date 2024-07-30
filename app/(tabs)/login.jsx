import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../assets/images/Logo.png"
import { Link } from 'expo-router'

export default function Login() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Image
                        source={logo}
                        width={100}
                        height={80}
                        resizeMode='cover'
                    />

                    <View>
                        <Text>Welcome back!</Text>
                        <Text>Login to your account</Text>
                    </View>

                    <View>
                        <Text>E-mail</Text>
                        <TextInput
                            placeholder="john@mail.com"
                            className="border rounded-sm"
                        />
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput
                            placeholder="password"
                            className="border rounded-sm"
                            secureTextEntry={true}
                        />
                    </View>

                    <View>
                        <Link href={""}>Parolingizni unutdingizmi?</Link>
                        <Link href={"register"}>Ro'yhatdan o'tish</Link>
                    </View>

                    <TouchableOpacity>
                        <Text>Hisobga kirish</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}