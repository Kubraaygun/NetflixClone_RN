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
import {height} from '../../utils/constants';
import {Text} from 'react-native-svg';
import {ThemeColors} from '../../theme/themeColors';

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
        onSubmit={values => dispatch(addNewList(values))}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <View>
              <Text style={{color: ThemeColors.WHITE, fontSize: 30}}>
                Ready to watch?
              </Text>
              <Text style={{}}>Enter your list to create or watch</Text>
            </View>
            <Input
              error={errors.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              title="Whatch List Name"
              placeholder=""
            />
            <View style={{marginTop: height * 0.09}}>
              <Button onPress={handleSubmit} title="CREATE" status="primary" />
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewList;
