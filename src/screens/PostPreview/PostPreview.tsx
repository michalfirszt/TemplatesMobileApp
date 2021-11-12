import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ScreenProps = {
  PostPreview: { postId: number };
};

type Props = NativeStackScreenProps<ScreenProps, 'PostPreview'>;

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
