import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useAuth } from "@hooks/useAuth";
import { api } from "@services/api";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { HStack, Text, VStack, FlatList, Heading, useToast } from "native-base";
import { useCallback, useEffect, useState } from "react";
import { AppError } from "@utils/AppError";
import { ExerciseDTO } from "@dtos/ExerciseDTO";
import { Loading } from "@components/Loading";

export function Home() {
    const { user } = useAuth();
    
    const [isLoading, setIsLoading] = useState(false);
    const [groups, setGroups] = useState<string[]>([]);
    const [exercises, setExercises] = useState<ExerciseDTO[]>([]);
    const [selectedGroup, setSelectedGroup] = useState('antebraço');

    const toast = useToast();
    const navigation = useNavigation<AppNavigatorRoutesProps>();
    
    function handleOpenExerciseDetails(exerciseId: string) {
        navigation.navigate('exercise', { exerciseId });
    }

    async function fetchGroups() {
        try {
            const response = await api.get('/groups');
            setGroups(response.data);
        } catch (error) {
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : "Não foi possível carregar os grupos musculares.";

            toast.show({
                title,
                placement: 'top',
                bgColor: 'red.500'
            });
        }
    }

    async function fetchExercisesByGroup() {
        try {
            setIsLoading(true);
            const response = await api.get(`/exercises/bygroup/${selectedGroup}`);
            setExercises(response.data);
        } catch (error) {
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : "Não foi possível carregar os exercícios.";

            toast.show({
                title,
                placement: 'top',
                bgColor: 'red.500'
            });
        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchGroups();
    }, []));

    useFocusEffect(useCallback(() => {
        fetchExercisesByGroup();
    }, [selectedGroup]));

    return (
        <VStack flex={1}>
            <HomeHeader name={user.name} />

            <FlatList 
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <Group 
                        name={item}
                        isActive={selectedGroup.toUpperCase() === item.toUpperCase()}
                        onPress={() => setSelectedGroup(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
                minH={10}
            />  

            {
                isLoading ? <Loading /> :
                <VStack flex={1} px={8}>
                    <HStack justifyContent='space-between' mb={5}>
                        <Heading color='gray.200' fontFamily="heading" fontSize='md'>
                            Exercícios
                        </Heading>

                        <Text color='gray.200' fontSize='sm'>
                            { exercises.length }
                        </Text>
                    </HStack>      
                    
                    <FlatList 
                        data={exercises}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <ExerciseCard 
                                onPress={() => {handleOpenExerciseDetails(item.id)}}
                                data={item}
                            />  
                        )}
                        showsVerticalScrollIndicator={false}
                        _contentContainerStyle={{ paddingBottom: 20 }}
                    />
                    

                </VStack>
            }
            
        </VStack>
            
    );
}