import React, { useEffect } from 'react';
import { Switch, useHistory, Route } from 'react-router-dom';
import { Authentication } from './views';
import { Metrics } from './components';
function App() {
  const history = useHistory();
  useEffect(() => {
    history.replace('/login')
  }, [history]);
  return (
    <div>
      Wrapper
      <Switch>
        <Route exact path={"/login"} component={Authentication} />
      </Switch>
      <Metrics />
    </div>
  );
}

export default App;
