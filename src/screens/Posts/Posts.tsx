import React, { useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {
  ActivityIndicator,
  Card,
  FAB,
  Title,
  Paragraph,
} from 'react-native-paper';

import { useGetPosts } from '../../api/posts';
import { screenNames } from '../../navigation/screenNames';
import { lightTheme } from '../../theme';

const styles = StyleSheet.create({
  postCard: {
    marginBottom: lightTheme.spaceUnit * 4,
  },
  fab: {
    backgroundColor: lightTheme.colors.primary,
    position: 'absolute',
    margin: lightTheme.spaceUnit * 3,
    right: 0,
    bottom: 0,
  },
});

const Posts = () => {
  const { navigate } = useNavigation();
  const { data, isLoading, refetch } = useGetPosts();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

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
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigate(screenNames.CreatePost)}
      />
    </SafeAreaView>
  );
};

export default Posts;
