import React, { useContext } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Switch } from 'react-native-paper';

import { ThemeContext } from '../../context/themeContext';

const Settings = (): JSX.Element => {
  const { isThemeDark, toggleIsThemeDark } = useContext(ThemeContext);

  return (
    <SafeAreaView>
      <View>
        <Switch value={isThemeDark} onChange={toggleIsThemeDark} />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
