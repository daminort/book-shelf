import {
  TypedUseSelectorHook,
  useDispatch as useNativeDispatch,
  useSelector as useNativeSelector,
} from 'react-redux';
import type { RootState, AppDispatch } from './store';

const useDispatch = () => useNativeDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useNativeSelector;

export {
  useDispatch,
  useSelector,
}
