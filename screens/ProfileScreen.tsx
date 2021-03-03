import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useQuery, useMutation } from "@apollo/client";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { USER } from '../queries';
import { User } from '../types';

const ProfileScreen = () => {
  const { loading, error, data } = useQuery(USER);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error</Text>;
  
  const { firstname, lastname, email, role, speciality } = data.user
  
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{firstname} {lastname}</Text>
          <Text style={styles.description}>{email}</Text>
          <Text style={styles.description}>{role.role_name}</Text>
          <Text style={styles.description}>{speciality.speciality_name}</Text>
          
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Assignements</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Submitted assignements</Text> 
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: "#609890",
    alignItems: 'center',
    height:hp('50%'),
    width: wp('100%'),
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    position: 'absolute',
    top: 120,
  },
  name:{
    fontSize:22,
    color:"#EC982F",
    fontWeight:'600',
  },
  body:{
    marginTop:50,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  buttonText: {
    color: "#fafafa",
  },
  info:{
    fontSize:16,
    color: "#EC982F",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#EC982F",
  },
});

export default ProfileScreen;
