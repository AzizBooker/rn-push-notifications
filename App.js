import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
/*
There are 2 types of notifications : local and push notifications

Local notifications:
1- Triggered by app,displayed locally to the user
2-not sent to other users or devices
could be used for a reminder app (There is no need for other users to be notified)

Push notifications:
1- not triggered by app but received by app, displayed locally to the user
2-can be sent remotely to other users or devices 
3-example chat app,email, shopping app




*/

Notifications.setNotificationHandler({
  handleNotification:async ()=>{
    return {
        shouldShowAlert:true
    }
  }
})

export default function App() {

  useEffect(() => {
      Permissions.getAsync(Permissions.NOTIFICATIONS).then(status=>{
        console.log(status)
      })
  }, [])
  

  const triggerNotificationHandler=()=>{
      Notifications.scheduleNotificationAsync({
        content:{
          title:"My  first local notification",
          body:"This is the first local notification we are sending"
        },
        trigger:{
          seconds:10
        }
      })
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Trigger Notification" onPress={triggerNotificationHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
