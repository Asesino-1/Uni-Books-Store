import React, { Component } from 'react';
import { logout, isLogin } from '../utils';
import ShowPosts from './showPosts'

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <div>
                <ShowPosts/>
            </div>
        );
    }
}

export default HomePage;
