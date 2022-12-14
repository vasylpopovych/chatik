import React, { useContext } from "react";
import Avatar from "../avatar/Avatar";
import classes from "./chatCard.module.scss";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";

const ChatCard = ({ props }) => {
  const { store } = useContext(Context);
  const getSelectedChat = () => {
    store.setSelectedChat(props.id);
    store.selectChatMessages(props.id);
  };
  const getDateFormat = (time) => {
    time = time.toDateString().slice(4);
    time = time.slice(0, 6) + "," + time.slice(6);
    return time;
  };

  return (
    <div
      onClick={getSelectedChat}
      className={(store.selectedChat === props.id && classes.wrapper_selected) || classes.wrapper}>
      <div className={classes.main_block}>
        <Avatar props={props.avatar} isVerified={true} />
        <div className={classes.name_message_block}>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.message}>{props.messagesHistory.at(-1).text}</div>
        </div>
      </div>
      <div className={classes.time}>{getDateFormat(new Date(props.messagesHistory.at(-1).time))}</div>
    </div>
  );
};

export default observer(ChatCard);
