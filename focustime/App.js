import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/timer';
import { FocusHistory } from './src/features/focus/FocusHistory';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);
  useEffect(() => {
    if (focusSubject) {
    setFocusHistory([...focusHistory, {key: String(focusSubject.length+1) , focusSubject}]);

    }
  }, [focusSubject]);
  
  const onClear = () => { setFocusHistory([])};

  return (
    <View style={styles.container}>
      {focusSubject ? (
        //  <Focus addSubject={setFocusSubject} />
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            setFocusSubject(null);
          }}
          clearSubject={() => setFocusSubject(null)}
        />
      ) : (
        
        <> 
          <Focus addSubject={setFocusSubject} />
    
          <FocusHistory focusHistory={focusHistory} onClear={onClear}/>
     
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#252250',
  },
  Textstyler: {
    color: 'white',
  },
});
