import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { userService } from "../../modules/user/service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import JWT from "expo-jwt";
import HeaderPerfil from "../../components/header_perfil/headerPerfil";
import PerfilOption from "../../components/perfil_option/perfilOption";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Perfil = ({ navigation }) => {
  const [data, setData] = React.useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    gettingCurrentUser();
  }, [refresh]);

  const gettingCurrentUser = useCallback(async () => {
    const TokenFromAS = await AsyncStorage.getItem("token");

    if (TokenFromAS) {
      // (token, key)
      const decodedData = JWT.decode(
        TokenFromAS,
        process.env.EXPO_PUBLIC_API_KEY
      );

      // id from current user
      const idCurrUser = decodedData && decodedData.id ? decodedData.id : "";

      if (idCurrUser) {
        // user info (funcionario)
        const dataCurrUser = await userService.findUserById(idCurrUser);
        setData(dataCurrUser);
      }
    }
  }, []);

  const defaultAction = () => {
    return;
  };

  const updatedDataRefresh = () => {
    setRefresh(!refresh);
  };

  const goToPerfilData = () => {
    navigation.navigate("PerfilData", {
      currUserData: data,
      refresh: () => updatedDataRefresh(),
    });
  };

  return (
    <SafeAreaView>
      <HeaderPerfil nome={data?.nome ?? ""} />
      <View style={styles.wrapOpt}>
        <View style={styles.containerOptions}>
          <PerfilOption
            Icon={
              <Ionicons name="newspaper-outline" size={24} color="#BCBCBC" />
            }
            title={"Ultimos serviços"}
            desc={"Minhas informações da conta"}
            action={defaultAction}
          />
          <PerfilOption
            Icon={
              <MaterialCommunityIcons
                name="newspaper-variant-multiple"
                size={24}
                color="#BCBCBC"
              />
            }
            title={"Meus dados"}
            desc={"Minhas informações da conta"}
            action={goToPerfilData}
          />
        </View>
        <View style={styles.containerOptions}>
          <PerfilOption
            Icon={<Feather name="help-circle" size={24} color="#BCBCBC" />}
            title={"Ajuda"}
            desc={""}
            action={defaultAction}
          />
          <PerfilOption
            Icon={<EvilIcons name="gear" size={24} color="#BCBCBC" />}
            title={"Configurações"}
            desc={""}
            action={defaultAction}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Perfil;
