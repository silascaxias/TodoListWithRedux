import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions/todo';

class TodoList extends Component {
  static navigationOptions = {
    title: "Todo List"
  };

  headerComponent = () => 
  (
    <View style = {styles.todoContainer}>
        <TouchableOpacity 
            style = {styles.todoButton}
            onPress = {() => {
            this.props.navigation.navigate('AddTodo');
        }} 
        >
        <Text style = {styles.todoButtonText}>Add new Todo</Text>
        </TouchableOpacity>
    </View>
  )
  
  renderItem = ({ item }) =>  (
    <View style = {styles.todoContainer}>
        <Text style = {styles.todoTitle}>{item.title}</Text>

        <TouchableOpacity 
            style = {styles.todoButton}
            onPress = {() => {this.props.delete(item.id)}}
        >
        <Text style = {styles.todoButtonText}>Excluir</Text>
        </TouchableOpacity>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          ListHeaderComponent = {this.headerComponent}
          contentContainerStyle = {styles.list}
          data = {this.props.todosList.reverse()}
          keyExtractor = {item => item.id.toString()}
          renderItem = {this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        todosList: state.todosReducer.todosList
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
        delete: (id) => dispatch(deleteTodo(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  list: {
    padding: 20
  },
  todoContainer: {
    alignContent: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    margin: 10
  },
  todoTitle: {
    flex: 3,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  todoButton: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#DA552F',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  todoButtonText: {
    fontSize: 16,
    color: '#DA552F',
    fontWeight: 'bold'
  },
  buttonBar: {
    margin: 16
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});