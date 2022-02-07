
import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from '@ant-design/icons'
import attached from '../assets/icons/attached.png'

const MessageForm = (props) => {
    const [value, setValue] = useState('')
    const {chatId, creds} = props

    const Submit = (e) => {
        e.preventDefault();
        const text = value.trim();
        if(text.length > 0) sendMessage(creds, chatId, {text})
        setValue('')
    }

    const Change = (e) => {
        setValue(e.target.value);

        isTyping(props, chatId);
    }

    const Upload = (e) => {
        sendMessage(creds, chatId, { files: e.target.files, text:'' })
    }
  return(
      <form className="message-form" onSubmit={Submit}>
          <input
            className="message-input"
            placeholder="Write a message..."
            value={value}
            onChange={Change}
            onSubmit={Submit}
          />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <img src={attached} alt="attach" width={'20px'} className="picture-icon"/>
                </span>
            </label>
            <input 
            type="file" 
            multiple={false}
            id='upload-button'
            style={{display:'none'}}
            onChange={Upload}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon"/>
            </button>
      </form>
  )
};

export default MessageForm;
