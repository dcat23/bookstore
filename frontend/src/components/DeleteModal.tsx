import { Dialog, Button, Typography} from "@mui/material"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBook } from "../Api/books";

const DeleteModal = ({id, isOpen, setIsOpen}:{id:number|undefined ,isOpen:boolean, setIsOpen:(arg:boolean)=>void}) => {
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: deleteBook,
        onSuccess: () => {
            alert("Deleted")
            queryClient.invalidateQueries()
        }
    })

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <Dialog open={isOpen}>
            <Typography variant="h4">
                Are you sure you want to delete this Book?
            </Typography>
            <Button color="primary" onClick={() => {
                mutate(id)
                closeModal()
            }}>
                Yes
            </Button>
            <Button color="error" onClick={() => closeModal()}>
                No
            </Button>
        </Dialog>
    )
}
export default DeleteModal