import React from 'react';
import './styles/App.css';
import ExampleComponent from './components/ExampleComponent';
import TelegramCards from './components/TelegramCards';

const App = () => {
    return (
        <div className="App">
            <h1>Welcome to My React Project</h1>
            <ExampleComponent />
            <TelegramCards />
        </div>
    );
};

export default App;