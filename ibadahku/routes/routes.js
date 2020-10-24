import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Pages
import Home from '../pages/Home/Home';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Ibadahku from '../pages/Ibadah/Ibadahku';
import Quran from '../pages/Quran/Quran';
import Profil from '../pages/Profile/Profil';
import Doa from '../pages/Doa/Doa';

// icons
import HomeGreenIcon from '../assets/image/icons/tabIcon/home-green-25.svg';
import IbadahkuGreenIcon from '../assets/image/icons/tabIcon/ibadahku-green-25.svg';
import QuranGreenIcon from '../assets/image/icons/tabIcon/quran-green-25.svg';
import ProfilGreenIcon from '../assets/image/icons/tabIcon/user-green-25.svg';
import DoaGreenIcon from '../assets/image/icons/tabIcon/doa-green-25.svg';
import HomeGreyIcon from '../assets/image/icons/tabIcon/home-grey-25.svg';
import IbadahkuGreyIcon from '../assets/image/icons/tabIcon/ibadahku-grey-25.svg';
import QuranGreyIcon from '../assets/image/icons/tabIcon/quran-grey-25.svg';
import ProfilGreyIcon from '../assets/image/icons/tabIcon/user-grey-25.svg';
import DoaGreyIcon from '../assets/image/icons/tabIcon/doa-grey-25.svg';
import QuranDetail from '../pages/Quran/QuranDetail';
import DoaDetail from '../pages/Doa/DoaDetail';
import EditProfile from '../pages/Profile/EditProfile';
import {connect} from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class Routes extends React.Component {
    ProfilePage = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Profile"
                    component={Profil}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfile}
                    options={{
                        headerTitleStyle: {
                            fontSize: 18,
                            fontFamily: 'Poppins-Medium',
                            textAlign: 'center',
                            marginRight: 45,
                        },
                    }}
                />
            </Stack.Navigator>
        );
    };
    DoaPage = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Doa"
                    component={Doa}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="DoaDetail"
                    component={DoaDetail}
                    options={{
                        headerTitleStyle: {
                            fontSize: 18,
                            fontFamily: 'Poppins-Medium',
                            textAlign: 'center',
                            marginRight: 45,
                        },
                    }}
                />
            </Stack.Navigator>
        );
    };
    QuranPage = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Quran"
                    component={Quran}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="QuranDetail"
                    component={QuranDetail}
                    options={{
                        headerTitleStyle: {
                            fontFamily: 'Poppins-Medium',
                            fontSize: 18,
                            textAlign: 'center',
                            marginRight: 45,
                        },
                    }}
                />
            </Stack.Navigator>
        );
    };
    getRouteName = (route) => {
        const routeName = route.state
            ? route.state.routes[route.state.index].name
            : route.params?.state || 'Quran';

        if (
            routeName == 'Quran' ||
            routeName == 'Doa' ||
            routeName == 'Profile'
        ) {
            return true;
        }
        return false;
    };
    HomeNavigation = () => {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#50D890',
                    labelStyle: {
                        fontFamily: 'Poppins-Light',
                    },
                }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({focused}) =>
                            focused ? <HomeGreenIcon /> : <HomeGreyIcon />,
                    }}
                />
                <Tab.Screen
                    name="Ibadahku"
                    component={Ibadahku}
                    options={{
                        tabBarIcon: ({focused}) =>
                            focused ? (
                                <IbadahkuGreenIcon />
                            ) : (
                                <IbadahkuGreyIcon />
                            ),
                    }}
                />
                <Tab.Screen
                    name="Quran"
                    component={this.QuranPage}
                    options={({route}) => ({
                        tabBarVisible: this.getRouteName(route),
                        tabBarIcon: ({focused}) =>
                            focused ? <QuranGreenIcon /> : <QuranGreyIcon />,
                    })}
                />
                <Tab.Screen
                    name="Doa"
                    component={this.DoaPage}
                    options={({route}) => ({
                        tabBarVisible: this.getRouteName(route),
                        tabBarIcon: ({focused}) =>
                            focused ? <DoaGreenIcon /> : <DoaGreyIcon />,
                    })}
                />
                <Tab.Screen
                    name="Profil"
                    component={this.ProfilePage}
                    options={({route}) => ({
                        tabBarVisible: this.getRouteName(route),
                        tabBarIcon: ({focused}) =>
                            focused ? <ProfilGreenIcon /> : <ProfilGreyIcon />,
                    })}
                />
            </Tab.Navigator>
        );
    };
    render() {
        return (
            <Stack.Navigator>
                {this.props.auth.authenticated ? (
                    <Stack.Screen
                        name="Main"
                        children={this.HomeNavigation}
                        options={{
                            headerShown: false,
                        }}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={Register}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </>
                )}
            </Stack.Navigator>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};
export default connect(mapStateToProps, null)(Routes);
