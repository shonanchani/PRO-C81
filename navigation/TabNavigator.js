import React, { component } from "react";
import { CreateBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = CreateBottomTabNavigator();

const BottomTabNavigator = () =>{
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Feed") {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={IconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTinColor: 'gray',
            }}
        >
            <Tab.Screen name ="Feed" component={Feed} />
            <Tab.Screen name ="CreatePost" component={CreatePost} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

