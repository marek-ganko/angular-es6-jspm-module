import TodoList from './todoList/index';
import TodoItem from './todoItem/index';
import Services from './services/index';

export default angular.module('AppModules', [Services.name, TodoList.name, TodoItem.name]);
console.log('AppModules loaded');