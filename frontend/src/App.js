import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {
  Switch, Route, Link
} from 'react-router-dom'
import { Container } from '@material-ui/core'

import Places from './components/Places'
import ChosenPlace from './components/ChosenPlace'
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
        </Switch>
        {/* <Footer /> */}
      </div>
    </Container>
  )
}

export default App
