import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux'
import LoginForm from '../screens/LoginForm'
import EmployeeList from '../components/EmployeeList'

const RouterComponent = () => {
    return (
        <Router sceneStyle={{}}>
            <Stack key="root" headerLayoutPreset={'center'} hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>
                <Scene key="main">
                    <Scene key="employeeList" component={EmployeeList} title="Employees" />
                </Scene>
            </Stack>
        </Router>

    )
}

export default RouterComponent;