import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
	user: null,
};

const userSlice = createSlice({
	initialState,
	name: 'users',
	reducers: {
		login(state, action) {
			state.isAuth = true;
			state.user = action.payload.user;
		},
		logout(state) {
			state.isAuth = false;
			state.user = null;
		},
		refreshUser(state, action) {
			state.isAuth = true;
			state.user = action.payload.user;
		},

		getUserss(state, action) {
			state.users = action.payload.users;
		},
		newUser(state, action) {
			const { newUser } = action.payload;

			state.posts = [newUser, ...state.user];
		},
		updateUser(state, action) {
			const { id, title, content } = action.payload;

			const postIndex = state.posts.findIndex(post => post.id === id);

			const updatedPost = { ...state.posts[postIndex], title, content };

			state.posts[postIndex] = updatedPost;
		},
		deletePost(state, action) {
			const { id } = action.payload;

			const postIndex = state.posts.findIndex(post => post.id === id);

			state.posts.splice(postIndex, 1);
		},
	},
});

export const usersActions = userSlice.actions;
export default userSlice.reducer;
