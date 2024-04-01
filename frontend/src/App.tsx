import { AppBar, Toolbar, Typography } from '@mui/material'
import './App.css'
import CreateBook from './components/CreateBook'
import BookList from './components/BookList'


function App() {

  return (
    <>
     <div>
      
        <AppBar
        position='static'>
          <Toolbar>
            <Typography align='center' variant='h2'>
           Books 📕📔📖📘📚🔖📕📖
            </Typography>
          </Toolbar>
        </AppBar>

       
        <CreateBook/> 
        <BookList />
      </div>
      
    </>
  )
}

export default App
