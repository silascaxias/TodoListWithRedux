import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TodoList from './pages/todoList';
import AddTodo from './pages/addTodo';

export default createAppContainer(
  createStackNavigator({
    TodoList: TodoList,
    AddTodo: AddTodo
  }, 
  {
    initialRouteName: 'TodoList',
    defaultNavigationOptions: {
      headerStyle: {
          backgroundColor: '#DA552F',
          elevation: 0,
          shadowOpacity: 0
      },
      headerTitleAlign: 'center',
      headerTintColor: '#FFF',
      headerTitleStyle: {
          fontWeight: 'bold',
          color: '#ffffff'
      }
   }
  }
));
