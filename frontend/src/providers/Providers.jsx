import { Provider } from 'react-redux';
import { store } from './global/store';

export default function Providers({ children }) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
