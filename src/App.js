import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { ChallengeList } from './ChallengeList';
import { Challenge } from './Challenge';
import { NewChallenge } from './NewChallenge';


function App() {
  return (
    <div>
      <Switch>
        <Route path='/challenge/:challengeId' component={Challenge} />
        <Route path='/new-challenge' component={NewChallenge} />
        <Route exact path='/' component={ChallengeList} />
      </Switch>
    </div>
  );
}

export default App;
