import { Avatar } from '@material-ui/core'
import './Message.css'

const Message = () => {
    return (
        <div className="messages">
            <Avatar />
            <div className="message__info">
            <h4>
            varunpusarla
            <span className="message__timestamp">this is a timestamp</span>
            </h4>
            <p>A messge</p>
            </div>
        </div>
      );
}
 
export default Message;