import { createStore} from 'redux';
import ticketTracker from './Reducers';


export default createStore(ticketTracker)
