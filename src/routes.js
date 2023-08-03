import Auth from "./auth";
import SignIn from "./signin";
import SignUp from "./signup";
import Todo from "./todo";
import UnAuth from "./unAuth";

export const ROUTES = [
  {
    path: "/",
    component: Todo,
    auth: Auth,
  },
  {
    path: "/signin",
    component: SignIn,
    auth: UnAuth,
  },
  {
    path: "/signup",
    component: SignUp,
    auth: UnAuth,
  },
];
