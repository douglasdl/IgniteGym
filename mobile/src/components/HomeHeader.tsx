import { Heading, HStack, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function HomeHeader() {

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleLogout() {
        navigation.navigate('signIn');
    }

    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
            <UserPhoto 
                source={{ uri: "http://github.com/douglasdl.png" }}
                size={16}
                alt="Foto de perfil do usuário"
                mr={4}
            />
            <VStack flex={1}>
                <Text color="gray.100" fontSize="md">
                    Olá,
                </Text>

                <Heading color="gray.100" fontSize="md">
                    Douglas
                </Heading>
            </VStack>

            <TouchableOpacity
                onPress={handleLogout}
            >
                <Icon
                    as={MaterialIcons}
                    name="logout"
                    color="gray.200"
                    size={7}
                />
            </TouchableOpacity>

        </HStack>
    );
}