import { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { bookFailure, bookStart, bookSuccess } from '../../redux/slice/bookSlice';
import Service from '../../config/service';
import { categoryFailure, categoryStart, categorySuccess } from '../../redux/slice/categorySlice';

export default function Home() {
    const { books } = useSelector(state => state.book);
    const { categories } = useSelector(state => state.category);
    const dispatch = useDispatch();
    const [cat, setCat] = useState("");
    const [nomi, setNomi] = useState("");

    const getAllCategories = async () => {
        try {
            dispatch(categoryStart());
            const { data } = await Service.getAllCategory();
            dispatch(categorySuccess(data));
        } catch (error) {
            console.log(error.message);
            dispatch(categoryFailure(error.message));
        }
    };

    useEffect(() => {
        const getBooksFunction = async () => {
            try {
                dispatch(bookStart());
                const { data } = await Service.getAllBooks(nomi, cat);
                dispatch(bookSuccess({ type: "b", data }));
            } catch (error) {
                console.log(error);
                dispatch(bookFailure(error.message));
            }
        };

        getAllCategories();
        getBooksFunction();
    }, [nomi, cat]);

    const Item = ({ nomi }) => (
        <View>
            <TouchableOpacity>
                <Text className="mx-4">{nomi}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView>
            <ScrollView>
                <View className="bg-blue-200 h-screen items-center justify-center">
                    <Text>Search Bar</Text>
                    <FlatList
                        data={categories}
                        renderItem={({ item }) => <Item nomi={item.nomi} />}
                        keyExtractor={item => item._id}
                        horizontal
                        showsHorizontalScrollIndicator
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}