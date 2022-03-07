import { profileDidEnter$, profileTimelineDidEnter$ } from '../streams/profile';
import { profileClient } from '../api/Profile';

export default function profile(subscribe) {
  subscribe(profileDidEnter$, (data) => {
    console.warn('profileDidEnter$');

    // Async data fetching
    profileClient.fetchProfileData(data?.params.id);
  });

  subscribe(profileTimelineDidEnter$, (data) => {
    console.warn('profileTimelineDidEnter$');

    // Async timeline fetching
    profileClient.fetchProfileTimeline(data?.params.id);
  });
}
