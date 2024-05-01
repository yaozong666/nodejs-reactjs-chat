import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='9f8bb32c-0a3f-46b9-a585-4ad66b7aff53'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage