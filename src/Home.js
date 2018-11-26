import React,{Component} from 'react';
import InputWithUserName from './InputWithUserName';

class Index extends Component {
    render () {
        return (
            <div>
                用户名：<InputWithUserName />
            </div>
        )
    }
}

export default Index