import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, Card, Title, Paragraph } from 'react-native-paper';

import { useGetPosts } from '../../api/posts';
import { screenNames } from '../../navigation/screenNames';
import { lightTheme } from '../../theme';

const styles = StyleSheet.create({
  postCard: {
    marginBottom: lightTheme.spaceUnit * 4,
  },
});

const Posts = () => {
  const { navigate } = useNavigation();
  const { data, isLoading } = useGetPosts();

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {!!data &&
            data.posts.map((post, index) => (
              <Card key={index} style={styles.postCard}>
                <TouchableOpacity
                  onPress={() =>
                    navigate(screenNames.PostPreview, { postId: post.id })
                  }>
                  <Card.Cover source={{ uri: post.image }} />
                  <Card.Content>
                    <Title>{post.title}</Title>
                    <Paragraph>{post.description}</Paragraph>
                  </Card.Content>
                </TouchableOpacity>
              </Card>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Posts;
