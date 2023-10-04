import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

const initialState = {
  users: [],
  isLoading: false,
  alertMessage: "",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        isLoading: false,
        alertMessage: "User deleted successfully.",
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        isLoading: false,
        alertMessage: "User updated successfully.",
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_ALERT":
      return {
        ...state,
        alertMessage: action.payload,
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({ type: "FETCH_USERS", payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
