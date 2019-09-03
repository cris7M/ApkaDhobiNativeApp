import { createAppContainer, createSwitchNavigator } from "react-navigation";

//import screens

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Screens = createSwitchNavigator({
  Welcome,
  Login,
  Register
});

export default createAppContainer(Screens);
