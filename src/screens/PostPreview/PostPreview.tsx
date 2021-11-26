import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackProps } from '../../types';
import { useGetPost } from '../../api/posts';

type Props = NativeStackScreenProps<AppStackProps, 'PostPreview'>;

const PostPreview = ({ route }: Props) => {
  const { params } = route;
  const { data, isLoading } = useGetPost({ postId: params.postId });

  return (
    <SafeAreaView>
      <View>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          !!data && (
            <>
              <Text>{data.post.title}</Text>
              <Text>{data.post.description}</Text>
            </>
          )
        )}
      </View>
    </SafeAreaView>
  );
};

export default PostPreview;
