// == will show equal if their boolean values turn out equal

// === compares types along with boolean value then says equal or not

var a=10
var b="10"
if(a==b)
{
    console.log("Equal by ==")
}

if(a===b)
{
    console.log("Equal by ===")
}

// passing value as boolean

var a=10
if(a)
{
    console.log("int val is true")
}


var a="Hello"
if(a)
{
    console.log("str val is true")
}

var a=""
if(a)
{
    console.log("empty string val is true")
}
else
{
    console.log("empty string val is false")
}

var a=undefined
if(a)
{
    console.log("undefined val is true")
}
else
{
    console.log("undefined val is false")
}

var a=null
if(a)
{
    console.log("null val is true")
}
else
{
    console.log("null val is false")
}