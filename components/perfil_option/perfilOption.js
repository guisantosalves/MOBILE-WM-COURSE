import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "./styles";

const PerfilOption = ({ Icon, title, desc }) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.leftSide}>{Icon}</View>
      <View>
        <Text>{title}</Text>
        {desc && <Text style={{ color: "#BCBCBC" }}>{desc}</Text>}
      </View>
      <View style={styles.rightSide}>
        <MaterialIcons name="arrow-forward-ios" size={24} color="#BCBCBC" />
      </View>
    </TouchableOpacity>
  );
};

export default PerfilOption;
