import { reduxUtils } from 'utils/redux.utils';

import { TYPES } from './constants';
import { slice } from './slice';

const { makeActionCreator } = reduxUtils;

const actions = {
  ...slice.actions,
  ...TYPES,
  listReload: makeActionCreator(TYPES.LIST_RELOAD),
}

export {
  actions,
}
