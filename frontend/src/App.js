import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
  Switch, Route, Link
} from 'react-router-dom'
import { Container } from '@material-ui/core'

import Places from './components/Places'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializePlaces())
  }, [dispatch])

  return (
    <Container>
      <div>
        <Switch>
          <Route path='/'>
            <Places />
          </Route>
          <Route path='/:id'>
            {/* <ChosenPlace /> */}
          </Route>
        </Switch>
      </div>
    </Container>
  )
}

export default App
