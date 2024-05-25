import React, { useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import JWT from "expo-jwt";
import { userService } from "../../modules/user/service";

function PerfilData({ route, navigation }) {
  const { currUserData, refresh } = route.params;
  const [bairro, setBairro] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [rua, setRua] = React.useState("");

  useEffect(() => {
    setBairro(currUserData.bairro);
    setCep(currUserData.cep);
    setNome(currUserData.nome);
    setRua(currUserData.rua);
  }, []);

  const cleanState = () => {
    setBairro();
    setCep();
    setNome();
    setRua();
  };

  const handleCancel = () => {
    cleanState();
    navigation.goBack();
  };

  const handleSave = React.useCallback(async () => {
    const data = await userService.updateUser(currUserData._id, {
      nome: nome,
      rua: rua,
      cep: cep,
      bairro: bairro,
    });

    if (data) {
      refresh();
      alert("Atualizado com sucesso!!");
      navigation.goBack();
    } else {
      alert("Impossível atualizar os dados!!");
    }
  }, [nome, rua, cep, bairro]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>
          <Text style={{ fontWeight: "bold" }}>Editando</Text> Informações
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.labelStyle}>Nome</Text>
          <TextInput
            value={nome}
            onChangeText={setNome}
            placeholder="Nome"
            style={styles.inputDesc}
          />
        </View>
        <View>
          <Text style={styles.labelStyle}>CEP</Text>
          <TextInput
            value={cep}
            onChangeText={setCep}
            placeholder="CEP"
            style={styles.inputDesc}
          />
        </View>
        <View>
          <Text style={styles.labelStyle}>Bairro</Text>
          <TextInput
            value={bairro}
            onChangeText={setBairro}
            placeholder="Bairro"
            style={styles.inputDesc}
          />
        </View>
        <View>
          <Text style={styles.labelStyle} ƒ>
            Rua
          </Text>
          <TextInput
            value={rua}
            onChangeText={setRua}
            placeholder="Rua"
            style={styles.inputDesc}
          />
        </View>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "#60BF81" }}
          onPress={() => handleSave()}
        >
          <Text style={{ ...styles.btnText, color: "#223240" }}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "#223240" }}
          onPress={() => handleCancel()}
        >
          <Text style={{ ...styles.btnText, color: "white" }}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default PerfilData;
