
1
var map = new Map();
map.set('2-1', "xyz");
map.set('0-1', "bar");
map.set('3-1', "abd");

var mapDsc = new Map([...map.entries()].sort());

console.log(mapDsc)

2for
var input = [2,3,8,1,4,5,9,7,6];

var output = [];
var inserted;

for (var i = 0, ii = input.length ; i < ii ; i++){
  inserted = false;
  for (var j = 0, jj = output.length ; j < jj ; j++){
    if (input[i] < output[j]){
      inserted = true;
      output.splice(j, 0, input[i]);
      break;
    }
  }
  
  if (!inserted)
    output.push(input[i])
}

console.log(output);

3foreach

a = [];
a[0] = 100;
a[5] = 200;
a[3] = 300;
a[4] = 400;
a.sort( function( a, b ) { return a - b });
a.forEach( function( va ) { console.log( va ) }); 
