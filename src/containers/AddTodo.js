import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect } from 'react-redux';
import {addTodo } from '../actions';

class AddTodo extends React.Component {
    state = {
        text: ''
    };

    addTodo = text => {
      //redux store
        this.props.dispatch(addTodo(text));
        this.setState({text: ''});

    };

    render() {
        return (
            <SafeAreaView>
                <View style={{flexDirection: 'row', marginHorizontal: 10}}>
                    <TextInput
                        value={this.state.text}
                        onChangeText={(text) => this.setState({text})}
                        placeholder='What Do you need to do?'
                        style={styles.todoInput}
                    />
                    <TouchableOpacity onPress={()=>this.addTodo(this.state.text)}>
                        <View style={{height: 50, backgroundColor: '#eaeaea',alignItems:'center',justifyContent:'center'}}>
                            <Icon name='md-add'
                                  size={30}
                            style={{padding: 10, color:'red'}}/>

                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
// const mapStateToProps = state => {
//     return{
//
//     }
// };
// const mapDispatchToProps = dispatch => {
//   return{
//
//   }
// };

export default connect()(AddTodo)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    todoInput: {
        borderWidth: 1,
        borderColor: '#f2f2e1',
        backgroundColor: '#eaeaea',
        height: 50,
        flex: 1,
        padding: 5
    }
});
