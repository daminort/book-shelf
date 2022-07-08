import { Action, ActionCreator } from 'state/action.interface';

function makeActionCreator(type: string, ...argNames: string[]): ActionCreator {

  return function createAction(...args: any): Action {

    const action: Action = {
      type,
      payload: {},
    };

    if (argNames.length > 0) {

      argNames.forEach((arg, index) => {
        const name = argNames[index];
        action.payload[name] = args[index];
      });
    }

    return action;
  };
}

function createActionType(prefix: string, type: string): string {
  return `${prefix}/${type}`;
}

const reduxUtils = {
  makeActionCreator,
  createActionType,
}

export {
  reduxUtils,
}
