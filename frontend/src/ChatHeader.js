import './ChatHeader.css'
import NotificationsIcon from '@material-ui/icons/Notifications'
import EditLocationRoundedICon from '@material-ui/icons/EditLocationRounded'
import PeopelAltRoundedIcon from '@material-ui/icons/PeopleAltRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import HelpRoundedIcon from '@material-ui/icons/HelpRounded'
import SendRoundedIcon from '@material-ui/icons/SendRounded'


const ChatHeader = () => {
    return (
        <div className="chatHeader">
            <h2>Header</h2>
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                    #
                    </span>
                    Test Channel Name
                </h3>
            </div>

            <div className="chatHeader__right">
                <NotificationsIcon />
                <EditLocationRoundedICon />
                <PeopelAltRoundedIcon />

                <div className="chatHeader__search">
                    <input placeholder='Search' />
                    <SearchRoundedIcon />
                </div>

                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>

        </div>

    );
}

export default ChatHeader