import React, { useState } from 'react';
import { View, StyleSheet, Text ,Vibration , Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './Timing';
import { useKeepAwake } from 'expo-keep-awake';

const DEFAULT_TIME = 0.1;
const DEFAULT_TIME2 = 0.2;
const ONE_SECOND_IN_MS = 1000;
export const Timer = ({ focusSubject ,onTimerEnd , clearSubject}) => {
  useKeepAwake();//keep the screen awake

  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };
  
  const changeTime = (min) => {
    setMinutes(min);

    setProgress(1);
    setIsStarted(false);
  };
const vibrate =()=>{
  if(Platform.OS == 'ios'){
    const interval = setInterval(()=>Vibration.vibrate(), 1000);
    setTimeout(()=> clearInterval((interval), 1000));

  }else{
Vibration.vibrate(1 * ONE_SECOND_IN_MS)

  }

}
  const onEnd = () => {

vibrate();
setMinutes(DEFAULT_TIME2);
setProgress(1);
setIsStarted(false);
onTimerEnd();


  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={isStarted}
          minutes={minutes}
          onProgress={onProgress}
          onEnd ={onEnd}
        />
      </View>
      <View style={{ paddingTop: 10 }}>
        <Text style={styles.title}> Focusing On:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{ padding: 30 }}>
        <ProgressBar
          progress={progress}
          color="#5E84E2"
          style={{ height: 10 }}
        />
      </View>

      <View style={styles.btn}>
        <Timing onChangeTime={changeTime} />
      </View>

      <View style={styles.btn}>
        {isStarted ? (
          <RoundedButton
            title="Pause"
            size={150}
            onPress={() => {
              setIsStarted(false);
            }}
          />
        ) : (
          <RoundedButton
            title="Start"
            onPress={() => {
              setIsStarted(true);
            }}
          />

        )}
<View style ={styles.clearSubject}>
         <RoundedButton
            title="-"
            size= {80}
            onPress={() => {
              clearSubject()
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  task: { fontSize: 30, textAlign: 'center', color: 'white' },
  countdown: {
    flex: 0.5,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  btn: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubject:{

paddingBottom : 25 , 
paddingLeft: 25,

  },
});
