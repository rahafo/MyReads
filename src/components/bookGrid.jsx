import React, {Component} from 'react'
import {Book} from './book'

export default class BookGrid extends Component {
    render() {
        return (
            <ol className="books-grid">
                {
                    this.props.books.map((book)=>
                        <li key={book.title}>
                            <Book book={book}/>
                        </li>
                        )
                }
            </ol>

        )
    }
}