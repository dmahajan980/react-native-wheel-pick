'use strict';

import { Platform } from 'react-native';
import DatePicker from './date-picker';

let DatePickerComponent = DatePicker;

const registerCustomDatePickerIOS = (CustomDatePickerIOS) => {
  if (Platform.OS === 'ios') {
    DatePickerComponent = CustomDatePickerIOS;
  }

  return DatePickerComponent;
};

module.exports = {
  DatePicker: DatePickerComponent,
  registerCustomDatePickerIOS,
};
