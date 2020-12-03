import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input } from './common'

class EmployeeCreate extends Component {

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="071 123 1234"
                    />
                </CardSection>
                <CardSection>

                </CardSection>
                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;