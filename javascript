var fact=function(number)
{
    var fac=1;
    for(var i=1;i<=number;i++)
    {
        fact=fact*i;
    }
    return number;
};
2
var map = new Map();
map.set('2-1', "foo");
map.set('0-1', "bar");
map.set('3-1', "baz");

var mapAsc = new Map([...map.entries()].sort());

console.log(mapAsc)

3
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
4
a = [];
a[0] = 300;
a[5] = 200;
a[3] = 100;
a.sort( function( a, b ) { return a - b });
a.forEach( function( value ) { console.log( value ) }); 

https://www.youtube.com/watch?v=hmSWb8B8Pk4
0or positive or negative value example [2-,2,10,1,3]20-2=18 value is postive it means b is less than a so it will sort that in 2,20
then compare another value 20-10 =10 again gives postive value  
0=a=b
posetive=a>b
negative=a<b
all this return value is used by sort
a = [];
a[0] = 300;
a[5] = 500;
a[3] = 200;
a[4] = 100;
a.sort( function( a, b ) { return a - b });
a.forEach( function( value ) { console.log( value ) }); 
