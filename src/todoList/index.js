import register from '../utils/register';
import TodoListDirective from './TodoListDirective';

export default register('')
  .directive('nokiaMap', MapDirective)
  .service('mapService', MapService);

console.log('AppModules loaded');