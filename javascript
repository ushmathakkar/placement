
1
var map = new Map();
map.set('2-1', "xyz");
map.set('0-1', "bar");
map.set('3-1', "abd");

var mapDsc = new Map([...map.entries()].sort());

console.log(mapDsc)

2for

var arr1=[5,8,3,6,2,1,0];

var tmp;
for(var i=0;i<arr1.length;i++)
{
    for(var j=i+1;j<arr1.length;j++)
    {
        if(arr1[i] > arr1[j])
        {
            tmp=arr1[i];
            arr1[i]=arr1[j];
            arr1[j]=tmp;
        }
    }
}
for(var i=0;i<arr1.length;i++)
{
    console.log(arr1[i])
}

arr1.forEach(function(){
    console.log("print"+arr1);
});
console.log(output);

3foreach

a = [];
a[0] = 100;
a[5] = 200;
a[3] = 300;
a[4] = 400;
a.sort( function( a, b ) { return a - b });
a.forEach( function( va ) { console.log( va ) }); 
