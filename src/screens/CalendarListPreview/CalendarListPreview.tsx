import React from 'react';
import { CalendarList } from 'react-native-calendars';

const CalendarListPreview = (): JSX.Element => {
  return (
    <CalendarList
      futureScrollRange={50}
      pastScrollRange={50}
      scrollEnabled={true}
      showScrollIndicator={true}
      onDayPress={(day) => {
        console.log(day);
      }}
    />
  );
};

export default CalendarListPreview;
