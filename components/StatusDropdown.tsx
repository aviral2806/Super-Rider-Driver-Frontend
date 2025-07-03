import { useThemeBorderColor } from "@/hooks/useThemeBorderColor";
import { useThemeCardColor } from "@/hooks/useThemeCardColor";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const StatusDropdown = () => {
  const [value, setValue] = useState(null);

  const backgroundColor = useThemeCardColor();
  const borderColor = useThemeBorderColor();

  const data = [
    {
      label: "Available",
      value: "available",
      icon: (
        <Feather
          name="check-circle"
          size={14}
          color={useColorScheme() === "light" ? "black" : "white"}
        />
      ),
    },
    {
      label: "Offline",
      value: "offline",
      icon: (
        <Feather
          name="bell-off"
          size={14}
          color={useColorScheme() === "light" ? "black" : "white"}
        />
      ),
    },
  ];

  const themeTextColor = useColorScheme() === "light" ? "black" : "white";

  const renderItem = (item) => {
    return (
      <View style={[styles.item, { backgroundColor }]}>
        {item.icon}
        <Text style={[styles.textItem, { color: themeTextColor }]}>
          {item.label}
        </Text>
      </View>
    );
  };

  // Function to render the icon for the selected item
  const renderLeftIcon = () => {
    const selectedItem = data.find((item) => item.value === value);
    return selectedItem ? (
      <View style={styles.icon}>{selectedItem.icon}</View>
    ) : null;
  };

  return (
    <Dropdown
      style={[
        styles.dropdown,
        { backgroundColor: backgroundColor, borderColor: "black" },
      ]}
      placeholderStyle={[
        styles.placeholderStyle,
        { color: useColorScheme() === "light" ? "black" : "white" },
      ]}
      selectedTextStyle={[styles.selectedTextStyle, { color: themeTextColor }]}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select status"
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      containerStyle={[{ borderColor }]}
      renderItem={renderItem}
      renderLeftIcon={renderLeftIcon} // Add this prop
    />
  );
};

export default StatusDropdown;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    marginLeft: 5,
    height: 35,
    width: 150,
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 8, // Increased margin for better spacing
  },
  item: {
    padding: 13,
    borderWidth: 0,
    flexDirection: "row",
    justifyContent: "flex-start", // Changed to flex-start for better alignment
    width: "100%",
    alignItems: "center",
    gap: 8, // Increased gap for better spacing
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Questrial", // Add this
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: "Questrial", // Add this
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: "Questrial", // Add this
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
