import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackProps } from '../../types';

type Props = NativeStackScreenProps<AppStackProps, 'PostPreview'>;

const PostPreview = ({ route }: Props) => {
  const { params } = route;

  return (
    <SafeAreaView>
      <View>
        <Text>{params.postId}</Text>
      </View>
    </SafeAreaView>
  );
};

export default PostPreview;
