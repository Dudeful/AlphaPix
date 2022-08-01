import { UserProvider } from './providers/User';
import { Routes } from './routes/Index';
import './styles/global.css';

export const App = () => {
	return (
	<UserProvider>
		<Routes />
	</UserProvider>
	);
};
