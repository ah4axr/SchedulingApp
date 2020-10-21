import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import InvitationCard from './InvitationCard';
import { Dimensions } from 'react-native';
import moment from "moment";

export default function CaroselView(props) {
  let deviceWidth = Dimensions.get('window').width;
  const [invites, setInvites] = useState(props.eventsData);
  const [acceptedInvites, setAcceptedInvites] = useState([])

  useEffect(()=>{
    setAcceptedInvites(props.eventsData)
  },[acceptedInvites])

  function renderItem(item, index) {  
      return (
        <InvitationCard 
          key={index}
          id={item.item.id}
          pic={item.item.pic}
          name={item.item.name}
          date={item.item.date}
          deleteInvite={()=> deleteInvite(item.item.id)}
          addInvite={()=> addInvite(item.item)}
        />
    );
  }

  let deleteInvite = (id) => {
    setInvites(
        invites.filter(invite => {
            if (invite.id !== id)
            {
              return true;
            }
        })
    );
  };

  /*function getDay(date){
    return (moment(date).format('D'));
  }*/

  let addInvite = (item) => {
    item.acceptInvitationCallBack(item);

    //setAcceptedInvites([...acceptedInvites, { id: item.id, pic: item.pic, name: item.name, 
    //accepted: item.accepted, date: item.date, key: getDay(item.date)}]);
    
    item.eventsAccepted(acceptedInvites);   

    setInvites(
      invites.filter(invite=>{ 
        if(invite.id !== item.id)
        {
          return true;
        }
      })
    )
  };

  if(invites.length > 0)
    {
    return (
      <View style={styles.container}>
        <View style={{width: '100%', paddingLeft: 15, paddingBottom: 15, alignItems: 'flex-start'}}>
          <Text style={{fontFamily: "Helvetica", fontSize: 12, }}>Pending ({props.eventsData.length})</Text>
        </View>
        <Carousel
            layout={'stack'}
            renderItem={renderItem}
            data={invites}
            sliderHeight={200}
            sliderWidth={deviceWidth}
            itemWidth={deviceWidth * 0.8}>
          </Carousel>
      </View>
    );
  }
  else
  {
    return(<View/>)
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    paddingTop: 15,
  },
});
