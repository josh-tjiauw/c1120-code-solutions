function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft !== friendsLeft && yourLeft !== friendsRight) {
    return false
  }

  if (yourRight !== friendsRight && yourRight !== friendsLeft) {
    return false
  }

  return true
}

/* Best Answer
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return yourLeft+yourRight === friendsLeft+friendsRight && (yourLeft === friendsLeft || yourLeft === friendsRight);
}
*/
