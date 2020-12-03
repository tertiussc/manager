import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from '../screens/LoginForm'
import EmployeeList from '../components/EmployeeList'
import EmployeeCreate from '../components/EmployeeCreate'

const RouterComponent = () => {
    return (
        <Router sceneStyle={{}}>
            <Stack key="root" headerLayoutPreset={'center'} hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        initial
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                </Scene>
            </Stack>
        </Router>

    )
}

export default RouterComponent;