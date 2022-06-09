import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import HomeScreen from './src/Screens/HomeScreen'
import SigninScreen from './src/Screens/SigninScreen'
// import firebase from 'firebase'
import { firebase } from '@react-native-firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAI22SB8w3njv2sbapvUjLLnB7s6prqF_Y",
  authDomain: "authenticationfirebase-77273.firebaseapp.com",
  projectId: "authenticationfirebase-77273",
  storageBucket: "authenticationfirebase-77273.appspot.com",
  messagingSenderId: "456913602214",
  appId: "1:456913602214:web:96453b321d3370040d1667",
  measurementId: "G-79B5C4GEGJ"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: ''
    })
  }
  signup = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert('Enter Atleast Six Characters');
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    catch (error) {
      console.log(error.toString())
    }

  }
  login = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
        alert(user);
      });
    }
    catch (error) {
      console.log(error.toString())
    }
  }
  render() {


    return (
      <View style={styles.root} >
        <Pressable style={styles.logbtnContainer} >
          <Text style={styles.logbtnText} > Log Out </Text>
        </Pressable>
        <Pressable style={styles.mainContainer}
        // onPress={authenticationPressed}
        >
          <Text style={styles.mainText}>
            React native firebase tutorial
          </Text>
        </Pressable>
        <View style={styles.inputContainer} >
          <TextInput placeholder='Enter your Email'
            keyboardType='email-address'
            style={styles.input}
            onChangeText={(email) => this.setState({ email })}

          />
        </View>
        <View style={{ marginTop: 20 }} />
        <View style={styles.inputContainer} >
          <TextInput placeholder='Password'
            keyboardType='default'
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}

          />
        </View>
        <Pressable style={styles.btnContainer}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text style={styles.btntxt}> Login </Text>
        </Pressable>
        <Pressable style={styles.btnContainer}
          onPress={() => this.signup(this.state.email, this.state.password)}

        >
          <Text style={styles.btntxt}> SignUp </Text>
        </Pressable>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  mainContainer: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    height: 50,
  },
  mainText: {
    fontSize: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: 300,
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9fd6ed',
    // color:'yellow',
    fontSize: 25,
  },
  btnContainer: {
    left: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: 150,
    height: 50,
    backgroundColor: 'lightgreen',
    borderRadius: 5,
  },
  btntxt: {
    fontSize: 20,
    textTransform: 'uppercase',
  }
})