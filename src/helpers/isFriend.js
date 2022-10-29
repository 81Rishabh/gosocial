export function isFriend(friends , userId) {
    for(var i = 0; i < friends.length; i++) {
        if(friends[i].to_user === userId) {
          return true;
        }
    }
    return false;
}