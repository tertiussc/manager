import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { employeeFetch } from '../actions/EmployeeActions'
import { CardSection } from './common'

class EmployeeList extends Component {
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
                    <CardSection>
                        <Text style={styles.item}>{item.name}</Text>
                    </CardSection>
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