import './App.css';

import SignInForm from './components/forms/sign-in';
import { ErrorModal } from './components/modals';

function App() {
    return (
        <div className='App'>
            <SignInForm />
            <ErrorModal />
        </div>
    );
}

export default App;
