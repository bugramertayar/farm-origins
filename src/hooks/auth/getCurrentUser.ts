export const getCurrentUser = () => {
  let currentUser = localStorage.getItem('currentUser');
  let currentUserObject = null;
  if (currentUser) {
    currentUserObject = JSON.parse(currentUser);
  }
  return currentUserObject;
};
