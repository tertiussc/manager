import React, { Component } from 'react';
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { SafeAreaView } from 'react-native'
import { Card, CardSection, Input, Button } from '../components/common'

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onButtonPress() {
        const { email, password } = this.props

        this.props.loginUser({ email, password })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="user@email.com"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            label="password"
                            placeholder="password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
                    </CardSection>
                </Card>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);