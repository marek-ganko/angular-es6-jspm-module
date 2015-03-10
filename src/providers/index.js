import register from '../utils/register';
import {LocalStorage} from './LocalStorage';

export default register('todo.providers')
	.provider('localStorage', LocalStorage);