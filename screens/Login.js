import React from 'react';

import { Formik } from 'formik';
import { View } from 'react-native';
import {Octicons} from '@export/vector/icons';


import {
  StyledContainer,
  PageLogo,
  PageTitle,
  InnerContainer,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors,

  
} from './../components/styles';
// import { View, ActivityIndicator } from 'react-native';

// //colors
// const { darkLight, brand, primary } = Colors;

// // icon
// import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';

// // keyboard avoiding view
// import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

// // api client
// import axios from 'axios';

// // Google Signin
// import * as Google from 'expo-google-app-auth';

// // Async storage
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // credentials context
// import { CredentialsContext } from './../components/CredentialsContext';
const {brand, darkLight} = Colors;
const Login = () => {
 
  return (
      <StyledContainer>
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./../assets/img/expo-bg1.png')} />
          <PageTitle>Event Planner</PageTitle>
          <SubTitle>Account Login </SubTitle>

        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
                console.log(values);
            }}

        >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
            <MyTextInput
             label="Email Address"
             placeholder="andyj@gmail.com"
             placeholderTextColor={darkLight}
             onChangeText={handleChange('email')}
             onBlur={handleBlur('email')}
             value={values.email}
             keyboardType="email-address"
             icon="mail"
            />
        </StyledFormArea>)}

        </Formik>
        </InnerContainer>
      </StyledContainer>
  );


};


const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
      <View>
        <LeftIcon>
          <Octicons name={icon} size={30} color={brand} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
        {isPassword && (
          <RightIcon
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
          >
            <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
          </RightIcon>
        )}
      </View>
    );
  };

export default Login;