import { Heading, HStack, Icon, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import BodySvg from '@assets/body.svg';

export function ExerciseHeader() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <VStack>
            <VStack px={8} bg='gray.600' pt={12}>
                <TouchableOpacity
                    onPress={handleGoBack}
                >
                    <Icon as={Feather} name='arrow-left' color='green.500' size={6} />
                </TouchableOpacity>

                <HStack alignItems='center' justifyContent='space-between' mt={4} mb={8} >
                    <Heading color='gray.100' fontSize='lg' fontFamily="heading" flexShrink={1} >
                        Puxada Frontal
                    </Heading>

                    <HStack alignItems='center'>
                        <BodySvg />
                        <Text color='gray.200' ml={1} textTransform='capitalize'>
                            Costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>

        </VStack>
    );
}