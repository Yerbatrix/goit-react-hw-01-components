import user from '../data/user.json';
import data from '../data/data.json';

import { Profile } from './Profile';
import { Statistics } from './Statistics';

export const App = () => {
  return (
    <div>
      <Profile user={user}></Profile>
      <Statistics data={data}></Statistics>
    </div>
  );
};
