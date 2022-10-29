const ROOT_URL = 'https://go-socialv1.herokuapp.com/api/v1';

export const ApiUrl = {
    // auth
    signIn : () => `${ROOT_URL}/users/create_session`,
    signUp : () => `${ROOT_URL}/users/create_user`,
    // posts urls
    fetchPost : () => `${ROOT_URL}/posts`,
    uploadPost : () => `${ROOT_URL}/posts/create_post`,
    destroyPost : (id) => `${ROOT_URL}/posts/destroy/${id}`,
    // profile url
    updateProfile : (id) => `${ROOT_URL}/users/update_profile/${id}`,
    userProfile : (id) => `${ROOT_URL}/users/users_profile/${id}`,
    getUsers : () => `${ROOT_URL}/users`,
    // friendship
    createFriendship : () => `${ROOT_URL}/friendship/create_friendship`,
    removeFriendship : () => `${ROOT_URL}/friendship/remove_friendship`,
    // comments
    createComments : () => `${ROOT_URL}/comments/create`
}