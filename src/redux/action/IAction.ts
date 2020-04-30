export default interface IAction<P, D> {
    type: string;
    payload?: any;
    data?: any;
    error?: string;
  }