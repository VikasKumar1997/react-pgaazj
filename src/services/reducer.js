import { addData$ } from "./action";

export default function dataReducer(state = [], action) {
  switch (action.type) {
    case addData$.SUCCESS:
      console.log(state);
      return [
        ...state,
        {
          name: action.name,
          message: action.message,
          permission: action.permission
        }
      ];
    default:
      return state;
  }
}
