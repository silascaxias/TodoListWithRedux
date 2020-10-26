import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todo';

class AddTodo extends Component {
    static navigationOptions = {
        title: "Add New Todo"
    };

    state = {
        todo: ''
    }

    render() {
        return (
            <View style = {styles.container}>
                <TextInput 
                    style = {styles.input}
                    placeholder = 'New Todo...'
                    value = {this.state.todo}
                    onChangeText = {todo => this.setState({ todo: todo })}
                />
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {() => {
                    this.props.add(this.state.todo)
                    this.setState({todo: ''})
                    
                }} 
                >
                <Text style = {styles.title}>Add new Todo</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
        add: (todo) => dispatch(addTodo(todo))
   }
}

export default connect(null, mapDispatchToProps)(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: 20
      },
      input: {
        height: 45,
        backgroundColor: '#FFF',
        alignSelf: 'stretch',
        borderColor: '#EEE',
        borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 10
      },
      button: {
        height: 45,
        padding: 5,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#DA552F',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
      },
      title: {
        fontSize: 16,
        color: '#DA552F',
        fontWeight: 'bold'
      },
});