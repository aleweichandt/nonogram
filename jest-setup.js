import mocks from 'react-native-jest-mocks';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

mocks.initAll();
Enzyme.configure({ adapter: new Adapter() });

jest.mock('redux-logger', () => ({
  createLogger: () => store => next => action => next(action), 
}));