import React from 'react';
import 'firebase/firestore';
import firestore, { whoAuth, firebase } from "./firebase";

class Setup extends React.Component {

    constructor() {
        super();
        this.state = {
            text1: "",
            text2: "",
            uid: ""
        };
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
  const userRef = db.collection("test").add({
    text1: this.state.text1,
    text2: this.state.text2,
    uid: whoAuth
  });  
        this.setState({
            fullname: "",
            email: ""
        });
    alert("new entry created, text1: " + this.state.text1 + " text2: " + this.state.text2 + " uid: " + whoAuth);
    };

    render() {
        return (
            <form onSubmit={this.addUser}>
                <input
                    type="text"
                    name="text1"
                    placeholder="Test1"
                    onChange={this.updateInput}
                    value={this.state.text1}
                />
                <input
                    type="text"
                    name="text2"
                    placeholder="Test2"
                    onChange={this.updateInput}
                    value={this.state.text2}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default Setup;