import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux'
import LoginForm from '../screens/LoginForm'

const RouterComponent = () => {
    return (
        <Router sceneStyle={{}}>
            <Stack key="root">
                <Scene key="login" component={LoginForm} title="Please Login" />
            </Stack>
        </Router>

    )
}

export default RouterComponent;