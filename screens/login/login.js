import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { AuthService } from "../../modules/auth/service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const isFocused = useIsFocused();

  const submit = useCallback(async () => {
    const loginInfo = {
      email: email,
      senha: senha,
    };

    const login = await AuthService.Login(loginInfo);

    if (login && login.token) {
      try {
        AsyncStorage.setItem("token", login.token);
      } catch (e) {
        alert("falha para inserir no async storage");
      }
      navigation.navigate("home");
    } else {
      alert("Senha ou email incorreto");
    }
  }, [email, senha]);

  // verify token in Local storage and send to home
  const verifyToken = async () => {
    const myToken = await AsyncStorage.getItem("token");
    if (myToken) {
      navigation.navigate("home");
    }
  };

  useEffect(() => {
    verifyToken();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.mainText}>Login</Text>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.textInputWrapper}>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="work@mail.com"
            style={styles.input}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.textInputWrapper}>
          <Text>Senha</Text>
          <TextInput
            value={senha}
            onChangeText={setSenha}
            placeholder="Senha...."
            style={styles.input}
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={(ev) => submit()}
          >
            <Text>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
