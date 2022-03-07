import { matchPath } from 'react-router-dom';
import { filter, map } from 'rxjs/operators';
import { main$ } from './main';

export const profileDidEnter$ = main$.pipe(
  map((location) => matchPath('/profile/:id', location.pathname)),
  filter((location) => !!location),
);

export const profileTimelineDidEnter$ = main$.pipe(
  map((location) => matchPath('/profile/:id/:tab', location.pathname)),
  filter((location) => location?.params?.tab === 'timeline'),
);
