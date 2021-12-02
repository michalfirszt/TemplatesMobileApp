import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useCreatePost } from '../../api/posts';
import { PostFormData } from '../../types';
import PostForm from '../../components/PostForm';
import { screenNames } from '../../navigation/screenNames';

const CreatePost = (): JSX.Element => {
  const { navigate } = useNavigation();

  const { mutate: createPost } = useCreatePost({
    onSuccess: () => {
      navigate(screenNames.Posts);
    },
  });

  const onSubmit = useCallback(
    (formData: PostFormData) => {
      createPost({ id: Number(Date.now()), ...formData });
    },
    [createPost],
  );

  return (
    <SafeAreaView>
      <View>
        <PostForm onSubmit={onSubmit} buttonText="Create post" />
      </View>
    </SafeAreaView>
  );
};

export default CreatePost;
