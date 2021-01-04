import React, {Component} from 'react'
import Book from './book'

export default class BookGrid extends Component {
    render() {
        return (
            <ol className="books-grid">
                <li>
                    <Book/>
                </li>
            </ol>

        )
    }
}