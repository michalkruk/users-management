import React, { Component } from "react";
import CardList from "./CardList";
import { users } from "./users";
import SearchBox from "./SearchBox";

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: users,
            searchfield: ""
        };
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
                <h1>Users list</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList users={filteredUsers} />
            </div>
        );
    }
}

export default App;
