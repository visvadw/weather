import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map( (book) => {
           return <li className="list-group-item" key={book.title}>{book.title}</li>
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

}

function mapStateToProps(state) {
    // whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    };
}

// connect takes a function and a component to produce a container
export default connect(mapStateToProps)(BookList);