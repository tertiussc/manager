import React, { Component } from 'react';
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions'
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button, Card, CardSection, Input } from './common'

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props

        this.props.employeeCreate({ name, phone, shift })
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="071 123 1234"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>
                <CardSection>
                    <Text style={styles.pickerLabel}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                        style={{ flex: 2 }}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    pickerLabel: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        paddingTop: 10
    },
    pickerContainer: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderColor: '#ddd',
        position: 'relative'
    }
})

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm

    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);