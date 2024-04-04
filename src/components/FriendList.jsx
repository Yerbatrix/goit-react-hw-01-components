import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  const friendList = friends;

  return (
    <ul className="friendList">
      {friendList.map(friend => (
        <FriendListItem key={friend.id} friend={friend}></FriendListItem>
      ))}
    </ul>
  );
};
