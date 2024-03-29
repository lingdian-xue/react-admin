import Loadable from "react-loadable";
import { Loading } from "../components";

const DashBoard = Loadable({
  loader: () => import("./DashBoard"),
  loading: Loading
});
const NotFound = Loadable({
  loader: () => import("./NotFound"),
  loading: Loading
});
const Login = Loadable({
  loader: () => import("./Login"),
  loading: Loading
});
const Settings = Loadable({
  loader: () => import("./Settings"),
  loading: Loading
});
const ArticleList = Loadable({
  loader: () => import("./Article"),
  loading: Loading
});
const ArticleEdit = Loadable({
  loader: () => import("./Article/Edit"),
  loading: Loading
});
const NoAuth = Loadable({
  loader: () => import("./NoAuth"),
  loading: Loading
});
const Profile = Loadable({
  loader: () => import("./Profile"),
  loading: Loading
});

export { DashBoard, NotFound, Login, Settings, ArticleList, ArticleEdit, NoAuth, Profile };
