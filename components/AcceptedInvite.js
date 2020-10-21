import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AcceptedInvite(props) {
  let imageBase = 'https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/';
    
  let imageFull = imageBase + props.pic;
	return (
		<View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.info}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: imageFull}}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textName}>{props.name}</Text>
              <Text style={styles.textDate}>{props.time}</Text>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
          <TouchableOpacity>
            <Image style={styles.buttons} source={require("../assets/call.png")}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.buttons} source={require("../assets/email.png")}/>
          </TouchableOpacity>
          </View>
        </View>
      </View>
	);
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      width: 315,
      height: 115,
    },
    wrapper:{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: 315,
        height: 80,
        borderColor: '#D8D8D8',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    info:{
      width: '70%',
      flexDirection: 'row',
    },
    imageContainer:{
      width: 50,
      height: 50,
      paddingLeft: 20,
      paddingTop: 10,
    },
    image:{
      width: 50,
      height: 50,
    },
    textContainer:{
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: 35,
    },
    textName:{
      fontFamily: "Helvetica",
      color: "#000000",
      fontSize: 14,
    },
    textDate:{
      width: '100%',
      fontFamily: "Helvetica",
      color: "#000000",
      fontSize: 12,
      letterSpacing: -.75,
      opacity: .5,
    },
    buttonsContainer:{
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttons:{
      width: 32,
      height: 32,
    }
  });