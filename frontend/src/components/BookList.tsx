import { useQuery } from "@tanstack/react-query"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { fetchBooks } from "../Api/books";
import { Book } from "../type/Book"
import BookRow from "./BookRow";

const BookList = () => {
   const { data, error, isLoading } = useQuery<Book[], Error>({
       queryKey: ['books'],
       queryFn:fetchBooks
   })

   if (isLoading) return <div>Loading...</div>
   if (error) return <div>An error has occurred: {error.message}</div>

   return(
       <div>
           <TableContainer>
               <Table size="medium">
                   <TableHead>
                       <TableRow>
                           <TableCell>
                               Title
                           </TableCell>
                           <TableCell>
                               Isbn
                           </TableCell>
                           <TableCell>
                               Cost
                           </TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {
                           data?.map((book, index) => (
                               <BookRow key={index} data={book}/>
                           ))
                       }
                   </TableBody>
               </Table>
           </TableContainer>
       </div>
   )
}

export default BookList