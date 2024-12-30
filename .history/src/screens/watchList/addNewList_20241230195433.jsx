//import liraries
import React from 'react';
import {View, ScrollView} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {Formik} from 'formik';
import newUserSchema from '../../utils/validationSchema';
import {useDispatch} from 'react-redux';
import {addNewUser} from '../../store/slice/userSlice';

// create a component
const AddNewList = () => {
  const dispatch = useDispatch();
  return (
    <View style={defaultScreenStyle.container}>
      <Formik
        initialValues={{
          id: Date.now(),
          name: 'Kubra',
          surname: 'Ayggn',
          phoneNumber: '1111222333',
          age: '32',
          email: 'kubra@kubra.com',
          gender: 'Kadin',
        }}
        validationSchema={newUserSchema}
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
