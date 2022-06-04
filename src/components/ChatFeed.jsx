import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];
    const renderReadReceipts = (message, isMyMessage) => {
        chat.people.map((person, index) => person.last_read === message.id && (
            <div 
            key={`read_${index}`}
            className="read-receipts"
            style={{float: isMyMessage ? 'right' : 'left', backgroundImage: `url(${message?.sender?.avatar})`}}
            />
        ))
    }

    const renderMessages = () => {
        const keys = Object.keys(messages)
        return keys.map((val, index)=>{
            const message = messages[val];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return(
                <div key={`msg_${index}`} style={{width:'100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message}/>
                            : <TheirMessage message={message} lastMessage={message[lastMessageKey]}/>
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px': '0', marginLeft: isMyMessage ? '0px' : '68px'}}>
                            {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }

    renderMessages()
    if(!chat) return <h1>obviously chat engine gave me a free trial only for 10 days that why it server isnt working</h1>;
  return(
      <div className="chat-feed">
          <div className="chat-title-container">
              <div className="chat-title">{chat.title}</div>
              <div className="chat-subtitle">
                  {chat.people.map((person) => `${person.person.username}`)}
              </div>
          </div>
          {renderMessages()}
          <div style={{height:'100px'}}/>
          <div className="message-form-container">
              <MessageForm {...props} chatId={activeChat} />
          </div>
      </div>
  );
};

export default ChatFeed;
