import { ChatEngine } from 'react-chat-engine';
import './root.css';
import ChatFeed from './components/ChatFeed'
// import LoginForm from './components/LoginForm';

const Root = () =>{
    // if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine
            height='100vh'
            projectID='52b33391-de48-42c8-9743-21f581cdf5fa'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default Root; 