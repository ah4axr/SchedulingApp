import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import moment from "moment";

export default function InvitationCard(props) {  
  let imageBase = 'https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/';

  function formatDate(date) {
    return (moment(date).format('dddd D MMMM') + ' - ' + moment(date).format('h:mm a'));
  }

  let imageFull = imageBase + props.pic;
  let dateFormated = formatDate(props.date);
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: imageFull}}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{props.name}</Text>
          <Text style={styles.textDate}>{dateFormated}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
      <TouchableOpacity
          style={{
            width: '50%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRightColor: '#D8D8D8',
            borderRightWidth: 1,
            }}
            onPress ={props.deleteInvite}>
          <Text
            style={{
              fontFamily: 'Helvetica',
              fontSize: 14,
              color: '#FF3B3B',
            }}>
            X Decline
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={
            props.addInvite
          }>
          <Text
            style={{
              fontFamily: 'Helvetica',
              fontSize: 14,
              color: '#38D459',
            }}>
            ✓ Accept
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    width: 315,
    height: 133,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  info:{
    width: '100%',
    height: '55%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 10,
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
  buttons:{
    flexDirection: 'row',
    borderTopColor: '#D8D8D8',
    borderTopWidth: 1,
    height: 52,
    width: '100%',
  },
  buttonStyle: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});