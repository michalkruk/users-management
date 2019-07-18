import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField } from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value))
    };
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ users: users }));
    }

    render() {
        const { users } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredUsers = users.filter(user =>
            user.name
                .toLocaleLowerCase()
                .includes(searchField.toLocaleLowerCase())
        );
        return (
            <div className="tc">
                <h1 className="title">Users list</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList users={filteredUsers} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
