import {Route, Routes} from 'react-router-dom'
import {Loyaut} from './components/Loyaut/Loyaut'
import {Home} from './pages/Home/Home'
import {Login} from './pages/Login/Login'
import {Register} from './pages/Register/Register'
import {Review} from './pages/Review/Review'
import {Trailers} from './pages/Trailers/Trailers'
import {Cast} from './pages/Cast/Cast'
import {Movie} from './pages/Movie/Movie'
import {Favorites} from './pages/Favorites/Favorites'
import {Details} from './pages/Details/Details'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import{refresh} from './redux/auth/authOperation'
import {useAuth} from './hooks/useAuth'

function App() {
  const dispatch = useDispatch()
  const {isRefreshing} = useAuth()
  useEffect(() => {
    dispatch(refresh())
  }, [dispatch])
  return (
    isRefreshing? <></>: 
    <Routes>
    <Route path = '/' element = {<Loyaut/>}>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/login' element = {<Login/>}/>
    <Route path = '/register' element = {<Register/>}/>
    <Route path = '/movie' element = {<Movie/>}/>
    <Route path = '/favorites' element = {<Favorites/>}/> 
    <Route path = '/details/:id' element = {<Details/>}>
    <Route path = 'cast' element = {<Cast/>}/>
    <Route path = 'review' element = {<Review/>}/>
    <Route path = 'trailers' element = {<Trailers/>}/>
    </Route>
    </Route>
    </Routes>
  )
}

export default App
