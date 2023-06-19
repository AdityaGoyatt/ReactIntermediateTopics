interface actionLogin {
  type: "Login";
  name: string;
}
interface actionLogout {
  type: "Logout";
}

type action = actionLogin | actionLogout;

const useReducer = (userName: string, action: action): string => {
  if (action.type === "Login") return action.name;
  if (action.type === "Logout") return "";
  return userName;
};

export default useReducer;
