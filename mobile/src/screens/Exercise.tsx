import { Button } from "@components/Button";
import { ExerciseHeader } from "@components/ExerciseHeader";
import { Box, HStack, Image, ScrollView, Text, VStack } from "native-base";
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';

export function Exercise() {

    return (
        <VStack flex={1}>
            <ExerciseHeader />

            <ScrollView>
                <VStack p={8}>
                    <Image
                        w='full'
                        h='80' 
                        source={{ uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg' }}
                        alt="Nome do exercício"
                        mb={3}
                        resizeMode='cover'
                        rounded='lg'
                    />
                    
                    <Box bg='gray.600' rounded='md' pb={4} px={4}>
                        <HStack alignItems='center' justifyContent='space-around' mb={6} mt={5}>
                            <HStack>
                                <SeriesSvg />
                                <Text color='gray.200' ml={2}>
                                    3 séries
                                </Text>
                            </HStack>

                            <HStack>
                                <RepetitionsSvg />
                                <Text color='gray.200' ml={2}>
                                    12 repetições
                                </Text>
                            </HStack>
                        </HStack>
                        <Button 
                            title="Marcar como realizado"
                        />
                    </Box>
                </VStack>
            </ScrollView>
        </VStack>
            
    );
}