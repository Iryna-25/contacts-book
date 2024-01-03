import { useSelector } from "react-redux";
import Navigation from "./Navigation/Navigation";

import NavUser from "./Navigation/NavUser";
import UserMenu from "./Menu/UserMenu/UserMenu";
import AuthMenu from "./Menu/AuthMenu";
import { authSelectors } from "../redux/auth";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      {isLoggedIn ? <NavUser/> : <Navigation/>}
      {isLoggedIn ? <UserMenu/> : <AuthMenu/>}
    </header>
  );
}
