import { useState } from 'react'

const defaultNewBook = {
    title: '',
    author: '',
}

function BookShelf() {
    // States
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState(defaultNewBook)

    // Event handlers
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setNewBook({
            ...newBook,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // add new book
        setBooks([
            ...books,
            newBook
        ])

        // reset values
        setNewBook(defaultNewBook)
    }

    // Return
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' id='title' value={newBook.title} onChange={handleInputChange} />
                    <label htmlFor="author">Author</label>
                    <input type="text" name='author' id='author' value={newBook.author} onChange={handleInputChange} />
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div className="bookCard" key={index}>
                        <h3>{book.title}</h3>
                        <p>by {book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BookShelf