import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
   
    return (
    <div style={{ height: '100vh' }}>
        <PrettyChatWindow 
            projectId='b06be9c8-8bb6-4244-b5b4-d2822205e904'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
       </div>
       )
}

export default ChatsPage;