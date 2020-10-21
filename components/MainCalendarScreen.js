import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,  } from 'react-native';
import Constants from 'expo-constants';
import moment from 'moment';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import MonthView from './MonthView'

export default class MainCalendarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      acceptedInvites: [],
    };
    this.eventsAccepted = this.eventsAccepted.bind(this);
  }

  componentDidMount() {
    const fetchData = async () => {
      let response = await fetch(
        'https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/cards.json'
      );
      let parseObject = await response.json();
      let eventArray = this.assignIDs(parseObject);
      this.setState({
        events: this.eventsPending(eventArray),
        acceptedInvites: [],
      });
    };
    fetchData();
  }

  //Method that filters Events Pending
  eventsPending(events) {
    return events.filter(event => {
      return event.accepted === undefined ? true : false;})
  }

  eventsAccepted(events){
    let temp = events.filter(event => {
      return event.accepted === true ? true : false;
    });
    this.setState({
      acceptedInvites: temp,
    })
  }

  acceptInvitationCallBack(event){
    event.key = moment(event.date).format('D');
    event.accepted = true;
    return event;
  }

  //AssignIDs  this function will be remove in the future as id will be added to the invitations

  assignIDs(events) {
    return events.map((event, index) => {
      event.id = index;
      event.accepted = undefined,
      event.acceptInvitationCallBack = this.acceptInvitationCallBack,
      event.eventsAccepted = this.eventsAccepted,
      event.date = moment(event.date, 'DD-MM-YYYY hh:mm:ss');

      return event;
    });
  }

  filterMonths(events, month){
    return events.filter(event => {
      return moment(event.date).format('MMMM') == month ? true : false;})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topNavigationView}>
        <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer()}}>
          <Image
          style={{margin: 10}}
            source={require('../assets/sidemenuBtn.png')}
          />
          </TouchableOpacity>
          <Text style={styles.topNavigationViewText}> DinDin </Text>
          <Image
             style={{margin: 10}}
            source={require('../assets/searchbtn.png')}
          />
        </View>
        
        <ScrollableTabView
          
          renderTabBar={() => (
          <ScrollableTabBar
          style={{height: 40, }}
          />)}
          tabBarTextStyle={styles.tabs}
          tabBarActiveTextColor={'black'}
          tabBarInactiveTextColor={"#D3D3D3"}
          initialPage={9}>
          <View tabLabel="January" >
            <MonthView pending={this.filterMonths(this.state.events, "January")} 
            accept={this.filterMonths(this.state.acceptedInvites, "January")}
            month={"January"} monthNumber={1}/>
          </View>
          <View tabLabel="February">
            <MonthView pending={this.filterMonths(this.state.events, "February")} 
            accept={this.filterMonths(this.state.acceptedInvites, "February")}
            month={"February"} monthNumber={2}/>
          </View>
          <View tabLabel="March">
            <MonthView pending={this.filterMonths(this.state.events, "March")}
            accept={this.filterMonths(this.state.acceptedInvites, "March")}
            month={"March"} monthNumber={3}/>
          </View>
          <View tabLabel="April" >
            <MonthView pending={this.filterMonths(this.state.events, "April")} 
            accept={this.filterMonths(this.state.acceptedInvites, "April")} 
            month={"April"} monthNumber={4}/>
          </View>
          <View tabLabel="May" >
            <MonthView pending={this.filterMonths(this.state.events, "May")} 
            accept={this.filterMonths(this.state.acceptedInvites, "May")} 
            month={"May"} monthNumber={5}/>
          </View>
          <View tabLabel="June" >
            <MonthView pending={this.filterMonths(this.state.events, "June")} 
            accept={this.filterMonths(this.state.acceptedInvites, "June")} 
            month={"June"} monthNumber={6}/>
          </View>
          <View tabLabel="July" >
            <MonthView pending={this.filterMonths(this.state.events, "July")} 
            accept={this.filterMonths(this.state.acceptedInvites, "July")}
            month={"July"} monthNumber={7}/>
          </View>
          <View tabLabel="August" >
            <MonthView pending={this.filterMonths(this.state.events, "August")} 
            accept={this.filterMonths(this.state.acceptedInvites, "August")}
            month={"August"} monthNumber={8}/>
          </View>
          <View tabLabel="September" >
            <MonthView pending={this.filterMonths(this.state.events, "September")} 
            accept={this.filterMonths(this.state.acceptedInvites, "September")} 
            month={"September"} monthNumber={9}/>
          </View>
          <View tabLabel="October" >
            <MonthView pending={this.filterMonths(this.state.events, "October")} 
            accept={this.filterMonths(this.state.acceptedInvites, "October")}
            month={"October"} monthNumber={10}/>
          </View>  
          <View tabLabel="November" >
            <MonthView pending={this.filterMonths(this.state.events, "November")} 
            accept={this.filterMonths(this.state.acceptedInvites, "November")} 
            month={"November"} monthNumber={11}/>
          </View>
          <View tabLabel="December" >
            <MonthView pending={this.filterMonths(this.state.events, "December")} 
            accept={this.filterMonths(this.state.acceptedInvites, "December")}
            month={"December"} monthNumber={12}/>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}
//<View style={{ height: 40, width: '100%' }} />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  topNavigationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  topNavigationViewText: {
    fontFamily: 'Helvetica',
    fontSize: 17,
    color: '#353535',
  },
  tabs:{
    fontSize: 14,
    fontFamily: "Helvetica",
    color: 'black'
  },
  pages:{
    height: '100%',
  }
});
