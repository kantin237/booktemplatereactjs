import React, {useEffect} from 'react'
import Book from './Book'

import {loadBooks} from '../../redux/book/bookAction'
import {useDispatch,useSelector} from 'react-redux'

export default function ListBook() {

    const dispatch = useDispatch();
    const stateBook = (useSelector(state => {return state.bookReducer.books}) || []) ;
    console.log(stateBook);
    const load =() =>{
        return dispatch(loadBooks());
    }

    useEffect(() => {
        load();
    },[]);

    return (
        <section className="pb-5 py-10">
            <div className="relative overflow-hidden">
                <h5 className="text-center uppercase text-green-500 mb-10 text-5xl animate-bounce">OUR JAVASCRIPT BOOKS</h5>
                <div className="grid grid-cols-3 gap-4 mx-16">
                    {stateBook.map(book =>(
                        <div>
                            <Book 
                                key = {book.isbn}
                                title = {book.title}
                                subtitle = {book.subtitle}
                                author = {book.author}
                                published = {book.published}
                                publisher = {book.publisher}
                                pages = {book.pages}
                                description = {book.description}
                                website = {book.website}
                            />
                        </div>
                    ))}
                </div>

            </div>
            
        </section>
    )
}
