import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Dimensions } from 'react-native';
import AcceptedInvite from './AcceptedInvite';

export default function CalendarScroll(props) {
  let deviceWidth = Dimensions.get('window').width;

  if(props.id !== undefined)
  {
    return (
      <View style={styles.container}>
        <Text style={styles.dates}>{props.date}</Text>
        <AcceptedInvite
          id={props.id}
          pic={props.pic}
          name={props.name}
          date={props.date}
          time={props.time}
        />
      </View>
    );
  }
  else
  {
    return (
      <View style={styles.containerImage}>
        <Text style={styles.dates}>{props.date}</Text>
        <View style={styles.wrapper}>
          <Image style={styles.image} source={require("../assets/addEvent.png")}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 315,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderColor: '#D8D8D8',
    borderTopWidth: 1,
  },
  containerImage:{
    flex: 1,
    width: 315,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderColor: '#D8D8D8',
    borderTopWidth: 1,
  },
  dates:{
    fontFamily: "Helvetica",
    fontSize: 13,
    paddingTop: 16,
    paddingBottom: 16,
  },
  wrapper:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 315,
    height: 80,
    borderColor: '#D8D8D8',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  image:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 33,
  }
});
