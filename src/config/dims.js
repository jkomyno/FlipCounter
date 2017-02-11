import { Dimensions } from 'react-native';

const dims = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
  rows: 5,
  cols: 3,
  tileMargin: 1,
};

export default dims;
