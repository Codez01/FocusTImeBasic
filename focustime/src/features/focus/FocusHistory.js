import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';


const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem}>{index+1}) {item.focusSubject}</Text>;
};
export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    
    <> 
      <SafeAreaView style={{ flex: 1 , alignItems: "center"}}>
       {focusHistory.length > 0&& (
          <>
        <Text style = {styles.historyTitle}>Things We've Focused On:</Text>
      
          <FlatList
            style={{ flex: 1, alignItems: 'center' }}
            data={focusHistory}
            renderItem={HistoryItem}
          />
     
      
<View style= {styles.clearBTN} > 
      <RoundedButton title= "Clear" textStyles = {{alignItems : "center"}} size= {90} onPress= {()=> {clearHistory();}}></RoundedButton>

      </View>
      
    </>
       )}
      </SafeAreaView>
         </>
  );
};

const styles =  StyleSheet.create({
historyTitle : {
fontSize : 20,
color: 'white',




},
historyItem:{
color: '#2190ff',
fontSize: 30,
}
,
clearBTN : {


alignContent: "center",
alignItems: "center",
paddingBottom: 30


}
,
})