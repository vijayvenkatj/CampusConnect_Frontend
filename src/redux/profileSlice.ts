import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProfileState = {
    profile: null,
    userProfile: null,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile(state, action: PayloadAction<Profile>){
            state.profile = action.payload;
        },
        setUserProfile(state, action: PayloadAction<Profile>){
            state.userProfile = action.payload;
        }
    }
});

export const {setProfile, setUserProfile} = profileSlice.actions;
export default profileSlice.reducer;

interface Profile {
    user_id: number;
    profile_picture: string | null;
    resume: string | null;
    name: string;
    email: string;
    rollnumber: string;
    batch: number;
    branch: string; 
    dob: Date | null;
    location: string | null;
    pers_email: string | null;
    mobile: string | null;
    about: string | null;
    github: string | null;
    linkedin: string | null;
    skills: string[] | null;
    interests: string[] | null;
    learning: string[] | null;
}

interface ProfileState {
    profile: Profile | null;
    userProfile: Profile | null;
}



