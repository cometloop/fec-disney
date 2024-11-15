import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { NotFound } from './screens/NotFound';
import { Navbar } from './components/Navbar';
import { Layout } from './components/Layout';
import { Footer } from './components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './screens/Home';
import { CharacterDetails } from './screens/CharacterDetails';
import { EditUserProfile } from './screens/EditUserProfile';
import { UserProfileScreen as UserProfile } from './screens/UserProfile';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path={routes.home} element={<Home />} />
						<Route
							path={routes.characterDetails.path}
							element={<CharacterDetails />}
						/>
						<Route path={routes.user.profile} element={<UserProfile />} />
						<Route
							path={routes.user.editProfile}
							element={<EditUserProfile />}
						/>
						<Route
							path={routes.user.editProfile}
							element={<div>User edit profile</div>}
						/>
						<Route path='*' element={<NotFound />} />
					</Routes>
					<Footer />
				</BrowserRouter>
				<Toaster />
			</Layout>
		</QueryClientProvider>
	);
};

export default App;
