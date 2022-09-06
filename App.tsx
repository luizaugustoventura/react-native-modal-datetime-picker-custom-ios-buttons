import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ViewStyle,
  TextStyle,
} from 'react-native';
import DateTimePickerModal, {
  CancelButton,
  CancelButtonStylePropTypes,
  cancelButtonStyles,
  ConfirmButton,
  ConfirmButtonStylePropTypes,
  confirmButtonStyles,
} from 'react-native-modal-datetime-picker';

const confirmButtonIOSCustomStyles: ConfirmButtonStylePropTypes = {
  ...confirmButtonStyles,
  text: {
    ...confirmButtonStyles.text,
    color: '#0B0',
  },
};

const cancelButtonIOSCustomStyles: CancelButtonStylePropTypes = {
  ...cancelButtonStyles,
  text: {
    ...cancelButtonStyles.text,
    color: 'red',
    fontWeight: 'bold',
  },
  button: {
    ...cancelButtonStyles.button,
    height: 66,
  },
};

const customButtonsIOSStyles: {
  button: ViewStyle;
  text: TextStyle;
} = {
  button: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#BD2DA7',
  },
};

const CustomConfirmButton = (props: {onPress: () => void}) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={customButtonsIOSStyles.button}
  >
    <Text style={customButtonsIOSStyles.text}>Confirm</Text>
  </TouchableOpacity>
);

const CustomCancelButton = (props: {onPress: () => void}) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={customButtonsIOSStyles.button}
  >
    <Text style={customButtonsIOSStyles.text}>Cancel</Text>
  </TouchableOpacity>
);

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
          customConfirmButtonIOS={props => (
            <ConfirmButton {...props} style={confirmButtonIOSCustomStyles} />
          )}
          customCancelButtonIOS={props => (
            <CancelButton {...props} style={cancelButtonIOSCustomStyles} />
          )}
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
          customConfirmButtonIOS={props => (
            <ConfirmButton
              {...props}
              buttonTextColorIOS="#93F"
              onPress={() => {
                props.onPress();
                Alert.alert('You pressed ConfirmButton');
              }}
            />
          )}
          customCancelButtonIOS={props => (
            <CancelButton
              {...props}
              buttonTextColorIOS="#C70"
              onPress={() => {
                props.onPress();
                Alert.alert('You pressed CancelButton');
              }}
            />
          )}
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
          customConfirmButtonIOS={props => (
            <CustomConfirmButton onPress={props.onPress} />
          )}
          customCancelButtonIOS={props => (
            <CustomCancelButton onPress={props.onPress} />
          )}
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
    color: '#007FF9',
  },
  datePickerTrigger: {
    marginTop: 6,
  },
});

export default App;
