import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import { View, Text, FlatList, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { employeeFetch } from '../actions/EmployeeActions'
import { CardSection } from './common'

class EmployeeList extends Component {
    onRowPress() {
        // the issue is on this.props.employee <- it is undefined, if i use employees 
        // then i get the whole employees object back
        Actions.employeeCreate({ employee: this.props.employee })
    }

    componentDidMount() {
        this.props.employeeFetch();
    }

    createDataSource(employees) {
        let employeeArr = [];
        if (employees) {
            employeeArr = Object.keys(employees).map(function (k, y) {
                let empObj = employees[k]
                empObj.key = k;
                return empObj;
            })
        }
        return (
            <FlatList
                data={employeeArr}
                renderItem={({ item }) =>
                    <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                        <View>
                            <CardSection>
                                <Text style={styles.item}>{item.name}</Text>
                            </CardSection>
                        </View>
                    </TouchableWithoutFeedback>
                }
            />
        )
    }

    render() {
        if (this.props.employees) {
            return (
                <View>
                    {this.createDataSource(this.props.employees)}
                </View>
            )
        }

    }
}
const mapStateProps = state => {
    const employees = state.employees
    return { employees };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
export default connect(mapStateProps, { employeeFetch })(EmployeeList);;