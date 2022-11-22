function initialize()
{   
    const nat = document.getElementById("nature");
    const por = document.getElementById("portraits");
    const spo = document.getElementById("sports");
    document.getElementById("bottomBody").style.backgroundImage = "linear-gradient(to left, #a2ffb2, #a0ffae, #9effab, #9cffa7, #9affa3)";


    nat.style.display = "block";
    por.style.display = "none";
    spo.style.display = "none";
}

function change(n)
{
    x=document.getElementById(n);

    z=document.getElementById("productsWhole");

    if (n=='nat')
    {
        initialize();
    }
    if (n=='por')
    {
        port();
    }
    if (n=='spo')
    {
        sports();
    }
}
function nature() 
{
    const nat = document.getElementById("nature");
    const por = document.getElementById("portraits");
    const spo = document.getElementById("sports");
    nat.style.animation ='fadeIn 1s';

    nat.style.display = "block";
    por.style.display = "none";
    spo.style.display = "none";

    document.getElementById("bottomBody").style.backgroundImage = "linear-gradient(to left, #a2ffb2, #a0ffae, #9effab, #9cffa7, #9affa3)";

}

function port() 
{
    const nat = document.getElementById("nature");
    const por = document.getElementById("portraits");
    const spo = document.getElementById("sports");
    por.style.animation ='fadeIn 1s';

    nat.style.display = "none";
    por.style.display = "block";
    spo.style.display = "none";

    document.getElementById('bottomBody').style.backgroundImage="linear-gradient(to right, #ffffdf, #fdffd7, #fbffcf, #f9ffc7, #f6ffbf)";
}

function sports() 
{
    const nat = document.getElementById("nature");
    const por = document.getElementById("portraits");
    const spo = document.getElementById("sports");
    spo.style.animation ='fadeIn 1s';

    nat.style.display = "none";
    por.style.display = "none";
    spo.style.display = "block";

    document.getElementById('bottomBody').style.backgroundImage="linear-gradient(to left bottom, #ff8c8c, #ff8784, #ff837b, #ff7f71, #ff7b68)";
}