import { reduxUtils } from 'utils/redux.utils';

const { createActionType } = reduxUtils;

const sliceName = 'Books';
const sagaName = 'Books/Saga';

const TYPES = {
  LIST_RELOAD: createActionType(sagaName, 'listReload'),
};

export {
  sliceName,
  sagaName,
  TYPES,
};
