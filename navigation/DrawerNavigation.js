import React, { component } from "react";
import {CreateDrawerNavigator} from "react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const Drawer = CreateDrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;