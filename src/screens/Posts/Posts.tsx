import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, List } from 'react-native-paper';

import { useGetPosts } from '../../api/posts';
import { Post } from '../../types';

const Posts = () => {
  const { navigate } = useNavigation();
  const { data: posts, isLoading } = useGetPosts();

  return (
    <SafeAreaView>
      <ScrollView>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <List.Section>
            {!!posts &&
              posts.map((post: Post, index: number) => (
                <List.Item
                  key={index}
                  title={post.title}
                  onPress={() => navigate('PostPreview', { postId: post.id })}
                  hasTVPreferredFocus={false}
                  tvParallaxProperties={false}
                />
              ))}
          </List.Section>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Posts;
