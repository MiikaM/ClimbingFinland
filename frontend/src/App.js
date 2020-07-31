import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {
  Switch, Route
} from 'react-router-dom'
import { Container } from '@material-ui/core'

import Places from './components/Places'
import ChosenPlace from './components/ChosenPlace'
import CommentForm from './components/CommentForm'
import { initializePlaces } from './reducers/placeReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializePlaces())
  }, [dispatch])

  return (
    <Container>
      <div>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path='/'>
            <Places />
          </Route>
          <Route path='/places/:id'>
            <ChosenPlace />
          </Route>
          <Route path='/comments'>
            <CommentForm />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Container>
  )
}

export default App
