// add solution here
function theBeatlesPlay(musicians, instruments){
  let arr = [];
  for (let i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts){
  while(i < 4){
    facts[i] += "!!!";
    i++;
  }
  return facts;
}