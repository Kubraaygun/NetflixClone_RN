//import liraries
import React from 'react';
import {View, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {Formik} from 'formik';
import {NewListSchema} from '../../utils/validationSchema';
import {addNewList} from '../../store/slice/whatchListSlice';

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
        validationSchema={NewListSchema}
        onSubmit={values => dispatch(addNewList(values.action))}>
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