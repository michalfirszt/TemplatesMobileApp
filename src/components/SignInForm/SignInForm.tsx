import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Controller, useForm } from 'react-hook-form';

import { lightTheme } from '../../theme';

export type FormData = {
  username: string;
};

type Props = {
  onSubmit?: (formData: FormData) => void;
};

const styles = StyleSheet.create({
  formRow: {
    paddingVertical: lightTheme.spaceUnit * 0.5,
  },
});

const SignInForm = ({ onSubmit }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: '',
    },
  });

  const handleSubmitForm = useCallback(
    (formData: FormData) => {
      onSubmit?.(formData);
    },
    [onSubmit],
  );

  return (
    <View>
      <View style={styles.formRow}>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              mode="outlined"
              label="username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.username}
            />
          )}
        />
      </View>
      <View style={styles.formRow}>
        <Button mode="contained" onPress={handleSubmit(handleSubmitForm)}>
          Sign in
        </Button>
      </View>
    </View>
  );
};

export default SignInForm;
