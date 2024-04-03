import { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.scss'
import 'normalize.css'
import { BrowserRouter } from 'react-router-dom'
import UserStore from './store/UserStore.jsx'
import TestStore from './store/TestStore.jsx'

export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        test: new TestStore()
    }}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context.Provider>,
    document.getElementById('root')
);