import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import Icon from '@mui/material/Icon';
import { Book } from '../type/Book';
// import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteModal from './DeleteModal';

//import UpdateModal from './UpdateModal';

import { useState } from 'react';


const BookRow = ({ data }: { data: Book }) => {
    const { id, title, isbn,cost } = data;
    const [isOpen, setIsOpen] = useState(false);
    // const[isUpdateOpen,setIsUpdateOpen]=useState(false)


    return (
        <>
            <TableRow key={id}>
                <TableCell>{title}</TableCell>
                <TableCell>{isbn}</TableCell>
                <TableCell>{cost}</TableCell>
                <TableCell>
                    <Icon color='error' onClick={() => setIsOpen(true)}>
                        <DeleteIcon />
                    </Icon>
                    {/* <Icon color='secondary' onClick={() => setIsUpdateOpen(true)}>
                       {<UpdateIcon />}
                    </Icon> */}
                </TableCell>
            </TableRow>
             {isOpen && <DeleteModal isOpen={isOpen} id={id} setIsOpen={setIsOpen} />}
          {/* //  {isUpdateOpen && <UpdateModal isUpdateOpen={isUpdateOpen} book={data}setIsUpdateOpen={setIsUpdateOpen}/>} */}
        </>
    );
};

export default BookRow;