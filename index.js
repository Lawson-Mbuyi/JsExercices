function valMinMax(arr) {
  if(!arr)   return 0
    max_som = 0, min_som = 0;
    arr=Array.from(arr);
    arr.sort(function(a,b){return a-b;});
  if(arr.length==5){
    for (let i = 0, j = 5 - 1;i < 5 - 1; i++, j--) {
       min_som += arr[i];
       max_som += arr[j];
    }
  }
  return min_som+' '+max_som;
}
function matriceCaree(arr) {
  var taille = arr[0].length;
  var diagonal_som1 = 0;
  var diagonal_som2 = 0;
  for (i = 0, j = taille - 1; i < taille; i++, j--) {
    diagonal_som1 += arr[i][i];
    diagonal_som2 += arr[i][j];
    var absolute_diff = Math.abs(diagonal_som1 - diagonal_som2);
  }
  return absolute_diff;
  }

  function camelCase(str) {
    if(!str)   return 0
      let upperCaseWords = 1;
      for (let i = 1; i < str.length; i += 1) {
        if (str[i].toUpperCase() == str[i] ) {
          upperCaseWords+=1;
        } 
      } 
    return upperCaseWords;
  }
 
function arcadeRank(top_scores, jeu) {
  const getRank=(x)=>{
  let top_scores_copie = [...new Set([top_scores,,x])];
  top_scores_copie.sort((a,b)=>(b-a));
  return top_scores_copie.indexOf(x)+1;
   }
  let ranks = [];
  for(let i=0;i<jeu.length;i++){
    const score = jeu[i];
    const rank=getRank(score);
    const minRank = Math.min(...ranks);
    ranks.push(minRank<rank? minRank:rank);
  }
  return ranks;
 }
module.exports = { valMinMax, matriceCaree, camelCase, arcadeRank };
