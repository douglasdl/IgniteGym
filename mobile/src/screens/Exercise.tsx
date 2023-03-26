import { Button } from "@components/Button";
import { ExerciseHeader } from "@components/ExerciseHeader";
import { Box, HStack, Image, ScrollView, Text, useToast, View, VStack } from "native-base";
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { api } from "@services/api";
import { useEffect, useState } from "react";
import { ExerciseDTO } from "@dtos/ExerciseDTO";
import { Loading } from "@components/Loading";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

type RouteParamsProps = {
    exerciseId: string;
}

export function Exercise() {

    const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmittingRegister, setIsSubmittingRegister] = useState(false);

    const toast = useToast();
    const route = useRoute();
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const { exerciseId } = route.params as RouteParamsProps;

    async function fetchExerciseDetails() {
        try {
            setIsLoading(true);
            const response = await api.get(`/exercises/${exerciseId}`);
            //console.log(response.data);
            setExercise(response.data);
        } catch (error) {
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : "Não foi possível carregar os detalhes do exercício.";

            toast.show({
                title,
                placement: 'top',
                bgColor: 'red.500'
            });
        } finally {
            setIsLoading(false);
        }
    }

    async function handleExerciseHistoryRegister() {
        try {
            setIsSubmittingRegister(true);
            await api.post('/history', { exercise_id: exerciseId});
            toast.show({
                title: "Exercício registrado em seu histórico com sucesso!",
                placement: 'top',
                bgColor: 'green.700'
            });

            navigation.navigate('history');
        } catch (error) {
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : "Não foi possível registrar o exercício.";

            toast.show({
                title,
                placement: 'top',
                bgColor: 'red.500'
            });
        } finally {
            setIsSubmittingRegister(false);
        }
    }

    useEffect(() => {
        fetchExerciseDetails();
    }, [exerciseId]);

    return (
        <VStack flex={1}>
            <ExerciseHeader 
                name={exercise.name}
                category={exercise.group}
            />
            
            {
                isLoading ? <Loading /> :

                <ScrollView>
                    <VStack p={8}>
                        <Box rounded='lg' mb={3} overflow="hidden">
                            <Image
                                w='full'
                                h={80} 
                                source={{ uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}`}}
                                alt={exercise.name}
                                resizeMode='cover'
                                rounded='lg'
                            />
                        </Box>
                    
                        
                        <Box bg='gray.600' rounded='md' pb={4} px={4}>
                            <HStack alignItems='center' justifyContent='space-around' mb={6} mt={5}>
                                <HStack>
                                    <SeriesSvg />
                                    <Text color='gray.200' ml={2}>
                                        {exercise.series} séries
                                    </Text>
                                </HStack>

                                <HStack>
                                    <RepetitionsSvg />
                                    <Text color='gray.200' ml={2}>
                                        {exercise.repetitions} repetições
                                    </Text>
                                </HStack>
                            </HStack>
                            <Button 
                                title="Marcar como realizado"
                                isLoading={isSubmittingRegister}
                                onPress={handleExerciseHistoryRegister}
                            />
                        </Box>
                    </VStack>
                </ScrollView>
            }
        </VStack>
            
    );
}