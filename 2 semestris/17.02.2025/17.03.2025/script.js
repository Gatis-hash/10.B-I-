
var turpinat = true;
while ( turpinat )
{
    let user = prompt("Turpināt ? Y/N");
    if (user.lowercase == "N")
    {
        turpinat = false;
    }
}
console.log("end while");