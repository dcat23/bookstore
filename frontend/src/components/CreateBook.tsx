import { Box, Input, FormControl, InputLabel, Typography, TextField, Button, FormHelperText } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { postNewBook } from "../Api/books"
import { Book } from "../type/Book"

const CreateBook = () => {
    const [title, setTitle] = useState('')
    const [isbn, setIsbn] = useState('')
    const [cost, setCost] = useState('')

    const mutation = useMutation({
        mutationFn: postNewBook,
        onSuccess: (data: string) => {
            alert(`Success: ${data}`);
        },
        onError: (error: Error) => {
            alert(`Error: ${error.message}`);
        },
    });
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newBook:Book = { title, isbn, cost }
        console.table(newBook)
        console.log("MJM:l26:handleSubmit:PreSubmit")
        mutation.mutate(newBook)
        console.log("MJM:l28:handleSubmit:AfterSubmit")
    }

    return(
        <Box component="form" onSubmit={handleSubmit} marginTop={4} >
        <FormControl>
            <InputLabel htmlFor="title">
                Title:
            </InputLabel>
            <Input id="title" aria-describedby="title-helper-text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
            <FormHelperText id="title-helper-text">Please enter the title!</FormHelperText>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="isbn">
               ISBN
            </InputLabel>
            <Input id="isbn" aria-describedby="isbn-helper-text" required value={isbn} onChange={(e) => setIsbn(e.target.value)} />
            <FormHelperText id="isbn-helper-text">Please enter the ISBN!</FormHelperText>
        </FormControl>

        <FormControl>
            <InputLabel htmlFor="cost">
              Cost
            </InputLabel>
            <Input id="cost" aria-describedby="cost-helper-text" required value={isbn} onChange={(e) => setCost(e.target.value)} />
            <FormHelperText id="cost-helper-text">Please enter the Cost!</FormHelperText>
        </FormControl>


        {/* <FormControl>
            <InputLabel htmlFor="vin">
                VIN:
            </InputLabel>
            <Input id="vin" required value={vin} onChange={(e) => setVin(e.target.value)}/>
        </FormControl> */}
        <Button type="submit" disabled={mutation.isPending}>
            Submit
        </Button>
</Box>
    )
}

export default CreateBook