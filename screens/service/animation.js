import { View, Text, Animated } from "react-native";
import React, { useRef, useEffect } from "react";

const Animation = ({ children, styles, statusCode }) => {
  const fadeAnim = useRef(new Animated.Value(0.3)).current;

  // animation logic
  useEffect(() => {
    if (statusCode && statusCode !== 2) {
      Animated.loop(
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        })
      ).start();
    }
  }, [fadeAnim]);

  return (
    <Animated.View style={{ ...styles, opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};

export default Animation;
