export type ActionPayload = Record<string, any>;

export type Action = {
  type: string,
  payload: ActionPayload,
}

export type ActionCreator = (...args: any[]) => Action;
