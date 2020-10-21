import React from 'react';
import { StyleSheet, Text, View, FlatList, } from 'react-native';
import moment from "moment";
import CalendarScroll from './CalendarScroll';
import { Dimensions } from 'react-native';

export default function Days(props) {
    let deviceWidth = Dimensions.get('window').width;

    function formatTime(date) {
        return (moment(date).format('h:mm a'));
    }
    let time = formatTime(props.date);

    let daysArray = []

    function mapMonthToDays(month, year){
        let count = 1;
        month = month-1;
        let day = new Date(year, month, count);

        while(day.getMonth() === month)
        {
            let dateObject = {
                accepted: undefined,
                date: formatDate(day),
                time: formatTime(day),
                id: undefined,
                key: (count).toString(),
                name: "",
                pic: "",
            }
            count += 1;

            daysArray.push(dateObject);
            day = new Date(day);
            day.setDate(day.getDate() + 1);
        }
        return daysArray;
    }
    
    function formatDate(date){
        return(moment(date).format('dddd D MMMM'))
    }

    function renderItem(item, index)
    {
        return (
        <CalendarScroll
            key={item.item.key}
            id={item.item.id}
            pic={item.item.pic}
            name={item.item.name}
            date={item.item.date}
            time={item.item.time}
        />
        )
    }

    function formatMonth(date){
        return(moment(date).format('MM'))
    }
    function formatYear(date){
        return(moment(date).format('YYYY'))
    }

    if(props.eventsData.length > 0)
    {
        let monthArray = mapMonthToDays(formatMonth(props.eventsData[0].date), formatYear(props.eventsData[0].date));
        
        for(let i=0; i<props.eventsData.length; i++)
        {
            for(let j=0; j<monthArray.length; j++)
            {
                if (formatDate(props.eventsData[i].date) == monthArray[j].date)
                {
                    monthArray[j].accepted = props.eventsData[i].accepted;
                    monthArray[j].date = formatDate(props.eventsData[i].date);
                    monthArray[j].time= formatTime(props.eventsData[i].date),
                    monthArray[j].id = props.eventsData[i].id;
                    monthArray[j].key = props.eventsData[i].key;
                    monthArray[j].name = props.eventsData[i].name;
                    monthArray[j].pic = props.eventsData[i].pic;
                }
            }
        }
        return(
            <View style={styles.container}>
                <FlatList
                    renderItem = {renderItem}
                    data = {monthArray}
                    sliderHeight={200}
                    sliderWidth={deviceWidth}
                    itemWidth={deviceWidth * 0.8}
                />
            </View>
        );
    }
    else
    {
        let monthArray = mapMonthToDays(props.monthNumber, 2019);
        return(
            <View style={styles.container}>
                <FlatList
                    renderItem = {renderItem}
                    data = {monthArray}
                    sliderHeight={200}
                    sliderWidth={deviceWidth}
                    itemWidth={deviceWidth * 0.8}
                />
            </View>);
    }
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        alignItems: 'center',
    }
})