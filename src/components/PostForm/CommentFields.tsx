import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Control,
  FieldErrors,
  useFieldArray,
  Controller,
} from 'react-hook-form';

import { PostFormData } from '../../types';
import { lightTheme } from '../../theme';
import { Button, TextInput } from 'react-native-paper';

type Props = {
  control: Control<PostFormData>;
  errors: FieldErrors<PostFormData>;
};

const styles = StyleSheet.create({
  formRow: {
    paddingVertical: lightTheme.spaceUnit * 0.5,
  },
});

const CommentFields = ({ control }: Props): JSX.Element => {
  const { fields, append, remove } = useFieldArray({
    name: 'comments',
    control,
  });

  return (
    <View>
      <Text>Comments</Text>
      <View>
        <Button onPress={() => append({ content: '' })}>Add new comment</Button>
      </View>
      <View>
        {fields.map((comments, index) => (
          <View key={index} style={styles.formRow}>
            <Controller
              control={control}
              name={`comments.${index}.content`}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  multiline
                  mode="outlined"
                  label="Comment content"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Button onPress={() => remove(index)} color="red">
              Delete comment
            </Button>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CommentFields;
