import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface CardProps{
  nameApp: string,
  version: string,
  name: string,
  link: string,
}


export default function Card({ version, name, link, nameApp}: CardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.meuApp}>{nameApp}</Text>
      <Text style={styles.version}>Version {version}</Text>
      <Text style={styles.developer}>Developer for</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(link)}>{link}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
        backgroundColor: "#ffff",
        height: 700,
        width: 350,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        
  },
  
  textColor:{
    color: "#000000",
    paddingBottom: 20,
  },

  meuApp:{
    color: "#000000",
    paddingBottom: 10,
    fontSize: 70,
    fontWeight: "700",
  },

  version:{
    color: "#000000",
    paddingBottom: 150,
    fontSize: 25,
  },

  developer:{
    color: "#000000",
    paddingBottom: 10,
    fontSize: 25,
  },

  name:{
    color: "#000000",
    paddingBottom: 10,
    fontSize: 50,
    fontWeight: "700",
  },

  link:{
    color: "#000000",
    paddingBottom: 10,
    fontSize: 15,
    fontWeight: "500",
  }

})