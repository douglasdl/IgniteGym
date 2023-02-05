import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useAuth } from "@hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { HStack, Text, VStack, FlatList, Heading } from "native-base";
import { useState } from "react";

export function Home() {
    const { user } = useAuth();
    
    const [groups, setGroups] = useState(['costas', 'bíceps', 'tríceps', 'ombros', 'peitos', 'Pernas', 'Abdominais']);
    const [exercises, setExercises] = useState(['Puxada Frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terra']);
    const [selectedGroup, setSelectedGroup] = useState('costas');

    const navigation = useNavigation<AppNavigatorRoutesProps>();
    
    function handleOpenExerciseDetails(exercise: string) {
        navigation.navigate('exercise');
    }

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
                    keyExtractor={(item) => item}
                    renderItem={({item}) => (
                        <ExerciseCard 
                            onPress={() => {handleOpenExerciseDetails(item)}}
                        />  
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
                  

            </VStack>
            
        </VStack>
            
    );
}