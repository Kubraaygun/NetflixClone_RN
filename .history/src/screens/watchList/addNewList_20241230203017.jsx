//import liraries
import React from 'react';
import {View, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {Formik} from 'formik';

// create a component
const AddNewList = () => {
  const dispatch = useDispatch();
  return (
    <View style={defaultScreenStyle.container}>
      <Formik
        initialValues={{
          id: Date.now(),
          title: '',
        }}
        // validationSchema={newUserSchema}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <Input
              error={errors.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              title="Whatch List Name"
              placeholder=""
            />
            <Button onPress={handleSubmit} title="Save" status="success" />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewList;
