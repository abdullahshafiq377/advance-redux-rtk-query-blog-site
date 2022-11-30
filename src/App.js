import './App.css';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';
import PostPage from './features/posts/PostPage';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import EditPostForm from './features/posts/EditPostForm';
import UsersList from './features/users/UsersList';
import UserPage from './features/users/UserPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<PostsList />} />

				<Route path='post'>
					<Route index element={<AddPostForm />} />
					<Route path=':postId' element={<PostPage />} />
					<Route path='edit/:postId' element={<EditPostForm />} />
				</Route>
				<Route path='user'>
					<Route index element={<UsersList />} />
					<Route path=':userId' element={<UserPage />} />
				</Route>
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}

export default App;
