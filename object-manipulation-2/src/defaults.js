/* exported defaults */
function defaults(target, source) {
  for(x in source){
    if(target[x]===undefined){
      target[x] = source[x];
    }
  }
}
