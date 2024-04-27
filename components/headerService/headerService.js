import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";

const HeaderService = ({ title }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.secondTitle}>Tipo de Serviço</Text>
      <Text style={styles.mainTitle}>{title}</Text>
    </View>
  );
};

export default HeaderService;
