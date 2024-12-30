//import liraries
import React from 'react';
import {View, ScrollView} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

// create a component
const AddNewList = () => {
  const dispatch = useDispatch();
  return (
    <View style={defaultScreenStyle.container}>
      <Formik
        initialValues={{
          id: Date.now(),
          title: 'Kubra',
        }}
        // validationSchema={newUserSchema}
        onSubmit={values => dispatch(addNewUser(values))}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <Input
              error={errors.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              title="name"
              placeholder="Please set name"
            />
            <Button onPress={handleSubmit} title="Save" status="success" />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewList;