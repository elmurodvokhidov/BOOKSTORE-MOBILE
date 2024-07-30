import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { bookFailure, bookStart, bookSuccess } from '../../redux/slice/bookSlice';
import Service from '../../config/service';

export default function Home() {
    const { books } = useSelector(state => state.book);
    const dispatch = useDispatch();
    const [cat, setCat] = useState("");
    const [nomi, setNomi] = useState("");

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

        getBooksFunction();
    }, [nomi, cat]);

    return (
        <SafeAreaView>
            <ScrollView>
                <View className="bg-blue-200 h-screen items-center justify-center">
                    {
                        books.map(book => (
                            <Text key={book?._id} className="text-red-500 text-4xl">
                                {book?.nomi}
                            </Text>
                        ))
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}