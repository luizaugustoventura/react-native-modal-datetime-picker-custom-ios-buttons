import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const App = () => {
  const [isPicker1Visible, setPicker1Visible] = useState(false);
  const [date1, setDate1] = useState(new Date());

  const [isPicker2Visible, setPicker2Visible] = useState(false);
  const [date2, setDate2] = useState(new Date());

  const [isPicker3Visible, setPicker3Visible] = useState(false);
  const [date3, setDate3] = useState(new Date());

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setPicker1Visible(true)}
        style={styles.datePickerTrigger}
      >
        <Text style={styles.text}>Date Picker 1 - Custom styles</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setPicker2Visible(true)}
        style={styles.datePickerTrigger}
      >
        <Text style={styles.text}>Date Picker 2 - Custom tintColor</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setPicker3Visible(true)}
        style={styles.datePickerTrigger}
      >
        <Text style={styles.text}>Date Picker 3 - Different Component</Text>
      </TouchableOpacity>

      <View>
        <DateTimePickerModal
          isVisible={isPicker1Visible}
          date={date1}
          mode="date"
          onConfirm={date => {
            setDate1(date);
            setPicker1Visible(false);
          }}
          onCancel={() => setPicker1Visible(false)}
        />

        <DateTimePickerModal
          isVisible={isPicker2Visible}
          date={date2}
          mode="date"
          onConfirm={date => {
            setDate2(date);
            setPicker2Visible(false);
          }}
          onCancel={() => setPicker2Visible(false)}
        />

        <DateTimePickerModal
          isVisible={isPicker3Visible}
          date={date3}
          mode="date"
          onConfirm={date => {
            setDate3(date);
            setPicker3Visible(false);
          }}
          onCancel={() => setPicker3Visible(false)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#9933FF',
  },
  datePickerTrigger: {
    marginTop: 6,
  },
});

export default App;
