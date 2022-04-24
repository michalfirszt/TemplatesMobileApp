import React, { useContext } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Switch } from 'react-native-paper';

import { ThemeContext } from '../../context/themeContext';

const Settings = (): JSX.Element => {
  const { isThemeDark, setIsThemeDark } = useContext(ThemeContext);

  return (
    <SafeAreaView>
      <View>
        <Switch
          value={isThemeDark}
          onChange={() => setIsThemeDark(!isThemeDark)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
