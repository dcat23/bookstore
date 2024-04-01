import axios from "axios";
import { Book } from "../type/Book";

export const fetchBooks = async (): Promise<Book[]> => {
    const { data } = await axios.get('http://localhost:8080/api/v1/book/')
    return data
}

export const postNewBook = async (newBook:Book): Promise<string> => {
    console.log("MJM:l10:postNewBook" + newBook.title +newBook.isbn)
    const { data } = await axios.post('http://localhost:8080/api/v1/book/', newBook,{
        headers: {
            "Context-Type" : "application/json",
            "Authorization" : "Bearer " + sessionStorage.getItem("Authorization"),
            "Allow-Control-Allow-Origin": "http://localhost:5173/"
        }
        
    })
    return data
}

export const deleteBook = async (id:number|undefined): Promise<string> => {
    const { data } = await axios.delete('http://localhost:8080/api/v1/book/' + id, {
        headers: {
            "Context-Type" : "application/json",
            "Authorization" : "Bearer " + sessionStorage.getItem("Authorization"),
            "Allow-Control-Allow-Origin": "http://localhost:5173/"
        }
    })
    return data
}

export const updatBook = async (book:Book): Promise<string> => {
    const { data } = await axios.put('http://localhost:8080/api/v1/book/' + book.id, book, {
        headers: {
            "Context-Type" : "application/json",
            "Authorization" : "Bearer " + sessionStorage.getItem("Authorization"),
            "Allow-Control-Allow-Origin": "http://localhost:5173/"
        }
    })
    return data
}