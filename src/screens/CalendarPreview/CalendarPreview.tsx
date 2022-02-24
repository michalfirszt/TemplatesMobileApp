import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { lightTheme } from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingVertical: lightTheme.spaceUnit,
  },
});

const CalendarPreview = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Calendar
            onDayPress={(day) => {
              console.log(day);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarPreview;
