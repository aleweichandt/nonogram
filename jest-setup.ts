import {Store} from 'redux';
// @ts-ignore
import mocks from 'react-native-jest-mocks';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

mocks.initAll();
// Enzyme.configure({ adapter: new Adapter() });

jest.mock('redux-logger', () => ({
  createLogger: () => (store: Store) => (next: any) => (action: any) =>
    next(action),
}));
