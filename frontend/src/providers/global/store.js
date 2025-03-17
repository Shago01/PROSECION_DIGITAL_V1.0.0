import { configureStore } from '@reduxjs/toolkit';
import authSlice from './feature/authSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    return serializedState ? { auth: JSON.parse(serializedState) } : undefined;
  } catch (err) {
    console.error('Error cargando el estado desde localStorage', err);
    return undefined;
  }
};

const preloadedState = loadState();
console.log(preloadedState);

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  preloadedState,
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('authState', JSON.stringify(state.auth));
  } catch (err) {
    console.error('Error guardando el estado en localStorage', err);
  }
});

export { store };
