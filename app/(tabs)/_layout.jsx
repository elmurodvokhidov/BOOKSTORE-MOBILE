import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Mahsulotlar',
                    headerShown: false,
                    tabBarIcon: (focused, color) => <MaterialIcons
                        name="my-library-books"
                        size={26}
                        color={color}
                    />
                }}
            />
            <Tabs.Screen
                name="wishlist"
                options={{
                    title: 'Istaklar',
                    headerShown: false,
                    tabBarIcon: () => <AntDesign
                        name="hearto"
                        size={24}
                        color="black"
                    />
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: 'Savat',
                    headerShown: false,
                    tabBarIcon: () => <AntDesign
                        name="shoppingcart"
                        size={28}
                        color="black"
                    />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profil',
                    headerShown: false,
                    tabBarIcon: () => <FontAwesome5
                        name="user"
                        size={24}
                        color="black" />
                }}
            />
            <Tabs.Screen
                name="register"
                options={{
                    href: null,
                }}
            />
            <Tabs.Screen
                name="login"
                options={{
                    href: null,
                }}
            />
        </Tabs>
    );
}
