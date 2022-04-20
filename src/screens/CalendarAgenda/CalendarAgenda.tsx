import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import { addDays, eachDayOfInterval, format, subDays } from 'date-fns';

import { lightTheme } from '../../theme';

const dateFormat: string = 'yyyy-MM-dd';
const today: string = format(new Date(), dateFormat);

const allDays: string[] = eachDayOfInterval({
  start: subDays(new Date(), 10),
  end: addDays(new Date(), 10),
}).map((dateObject) => format(dateObject, dateFormat));

const allDaysData: AgendaSchedule = allDays.reduce((acc, date) => {
  acc[date] = [];
  return acc;
}, {});

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: lightTheme.colors.white,
    borderRadius: lightTheme.spaceUnit * 0.5,
    padding: lightTheme.spaceUnit * 1.5,
    marginRight: lightTheme.spaceUnit * 1.5,
    marginTop: lightTheme.spaceUnit * 2,
  },
  emptyDay: {
    flex: 1,
    height: lightTheme.spaceUnit * 2,
    paddingTop: lightTheme.spaceUnit * 4,
  },
});

const CalendarAgenda = (): JSX.Element => {
  const [items] = useState<AgendaSchedule>(allDaysData);

  const handleRenderItem = useCallback(
    (reservation: AgendaEntry, isFirst: boolean) => {
      const fontSize = lightTheme.spaceUnit * (isFirst ? 2 : 1);
      const color = isFirst
        ? lightTheme.colors.black
        : lightTheme.colors.primary;

      return (
        <TouchableOpacity
          style={[styles.item, { height: reservation.height }]}
          onPress={() => Alert.alert(reservation.name)}>
          <Text style={{ fontSize, color }}>{reservation.name}</Text>
        </TouchableOpacity>
      );
    },
    [],
  );

  const handleRowHasChanged = useCallback(
    (a: AgendaEntry, b: AgendaEntry) => a.name !== b.name,
    [],
  );

  const handleRenderEmptyDate = useCallback(
    () => (
      <View style={styles.emptyDay}>
        <Text>Empty</Text>
      </View>
    ),
    [],
  );

  return (
    <Agenda
      items={items}
      rowHasChanged={handleRowHasChanged}
      renderEmptyDate={handleRenderEmptyDate}
      renderItem={handleRenderItem}
      selected={today}
      theme={{
        todayTextColor: lightTheme.colors.primary,
        selectedDayBackgroundColor: lightTheme.colors.primary,
        dotColor: lightTheme.colors.primary,
      }}
      showClosingKnob
    />
  );
};

export default CalendarAgenda;
