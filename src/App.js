import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

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
        const filteredUsers = this.state.users.filter(users =>
            users.name
                .toLocaleLowerCase()
                .includes(this.state.searchfield.toLocaleLowerCase())
        );
        return (
            <div className="tc">
                <h1 className="title">Users list</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList users={filteredUsers} />
            </div>
        );
    }
}

export default App;
