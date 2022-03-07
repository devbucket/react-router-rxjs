import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useProfile = create(devtools((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
}), { name: 'profile' }));

const profileStore = useProfile.getState();

class ProfileClient {
  async fetchProfileData(profileId) {
    profileStore.setLoading(true);
    console.warn(`Fetching profile: ${profileId}`);
    setTimeout(() => {
      profileStore.setLoading(false);
    }, 1500);
  }

  async fetchProfileTimeline(profileId) {
    profileStore.setLoading(true);
    console.warn(`Fetching profile timeline: ${profileId}`);
    setTimeout(() => {
      profileStore.setLoading(false);
    }, 3000);
  }
}

export const profileClient = new ProfileClient();
