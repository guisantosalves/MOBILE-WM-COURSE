import React, { useCallback, useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { userService } from "../../modules/user/service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import JWT from "expo-jwt";
import HeaderPerfil from "../../components/headerPerfil/headerPerfil";

const Perfil = () => {
  const [data, setData] = React.useState();

  useEffect(() => {
    gettingCurrentUser();
  }, []);

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
        // user info
        const dataCurrUser = await userService.findUserById(idCurrUser);
        setData(dataCurrUser);
      }
    }
  }, []);

  return (
    <SafeAreaView>
      <HeaderPerfil nome={data?.nome ?? ""} />
    </SafeAreaView>
  );
};

export default Perfil;
