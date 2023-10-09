import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";
import MenuComponent from '../components/main/Menu';
import Card from '../components/About/Card';

function main() {
  
  return (
    <ActionSheetProvider>
    <View style={styles.container}>
      <Stack.Screen
        options={
          { 
            title: 'Soca Rão',
            headerRight:() => <MenuComponent/>
          }
        }
      />
      <Card version={'1.0'} name={'Rafael Sedor'} link={'https://github.com/RafaelSedor/Avaliacao1'} nameApp='Soca Rão'/>
    </View>
    </ActionSheetProvider>
  )
}

const ConnectedMain = connectActionSheet(main);

export default ConnectedMain;

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: "center",
        justifyContent: "center",
    }
})