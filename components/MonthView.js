import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Days from './Days';
import CaroselView from './CaroselView';

export default function MonthView(props) { 
  if(props.pending.length > 0)
  {
    return(
      <View style={styles.pages}>
        <LinearGradient colors={['#FFFFFF', '#D3DAEB', '#FFFFFF']}>
            <CaroselView eventsData={props.pending} tab={props.tab}/>
        </LinearGradient>
        <Days eventsData={props.accept} month={props.month} monthNumber={props.monthNumber}/>
      </View>
    )
  }
  else
  {
    return(
      <View style={styles.pages}>
        <LinearGradient colors={['#FFFFFF', '#D3DAEB', '#FFFFFF']}>
          <View style={styles.noPendingContainer}>
            <Text style={styles.noPendingText}>No pending events this month.</Text>
          </View>
        </LinearGradient>
        <Days eventsData={props.accept} month={props.month} monthNumber={props.monthNumber}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages:{
    height: '100%',
  },
  noPendingContainer:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    paddingTop: 15,
  },
  noPendingText:{
    fontFamily: "Helvetica-Bold",
    fontSize: 20,
  }
})