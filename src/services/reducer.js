import { addData$ } from "./action";

export default function dataReducer(state = [], action) {
  switch (action.type) {
    case addData$.SUCCESS:
      
      return [
        ...state,
        {
          name: action.payload.name,
          message: action.payload.message,
          permission: action.payload.permission
        }
      ];
    default:
      return state;
  }
}
