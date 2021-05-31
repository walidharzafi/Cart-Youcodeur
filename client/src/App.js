import Routes from './routes/Routes.routes'
import { UserProvider } from './Context/ContextUser'
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
