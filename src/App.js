import './App.css';

import SignUp from './components/forms/signUp';
import { ErrorModal } from './components/modals';

function App() {
    return (
        <div className='App'>
            <SignUp />
            <ErrorModal />
        </div>
    );
}

export default App;
