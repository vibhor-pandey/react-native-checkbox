# React Native Checkbox

React Native Checkbox styled with JS.

![demo](/demo.gif)

## Usage

I'm going to refer to the `react-native-checkbox` Component as `Checkbox`. You can name it whatever you like when importing it.


```javascript
import Checkbox from './react-native-checkbox/index';

class App extends React.Component {
  constructor(prop, context){
    super(prop, context);
    this.state = {
      isChecked: false
    };

  setChecked(){
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  render() {
    return (
      <View>
        <CheckBox 
          borderColor={"#F0F"}
          imageURI={require('../check-image.png')}
          onPress={() => this.setChecked()}
          label={"My checkbox"}
          labelStyle={styles.labelText}
              />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  labelText: {
    color: '#F0F',
    fontSize: 15,
    fontWeight: "400"
  }
});
```

# react-native-checkbox
