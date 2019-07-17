import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchfield: ""
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ users: users }));
    }

    onSearchChange = e => {
        this.setState({ searchfield: e.target.value });
    };

    render() {
        const { users, searchfield } = this.state;
        const filteredUsers = users.filter(user =>
            user.name
                .toLocaleLowerCase()
                .includes(searchfield.toLocaleLowerCase())
        );
        return (
            <div className="tc">
                <h1 className="title">Users list</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList users={filteredUsers} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;
