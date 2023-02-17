
export function correctSingle(int){
  if(String(int).length == 1){
    return `0${int}`;
  }
  return int;
}
