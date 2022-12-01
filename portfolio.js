function initialize()
{   
    const nat = document.getElementById("nature");
    const por = document.getElementById("portraits");
    const spo = document.getElementById("sports");
    const oth = document.getElementById("others");
    document.getElementById("bottomBody").style.backgroundImage = "linear-gradient(to left, #a2ffb2, #a0ffae, #9effab, #9cffa7, #9affa3)";


    nat.style.display = "block";
    por.style.display = "none";
    spo.style.display = "none";
    oth.style.display = "none";

    let buttons = document.querySelectorAll('switchButtons');

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
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
    if (n=='oth')
    {
        other();
    }
}
function nature() 
{
    const nat = document.getElementById("nature");
    const por = document.getElementById("portraits");
    const spo = document.getElementById("sports");
    const oth = document.getElementById("others");
    nat.style.animation ='fadeIn 1s';

    nat.style.display = "block";
    por.style.display = "none";
    spo.style.display = "none";
    oth.style.display = "none";

    document.getElementById("bottomBody").style.backgroundImage = "linear-gradient(to left, #a2ffb2, #a0ffae, #9effab, #9cffa7, #9affa3)";

}

function port() 
{
    const nat = document.getElementById("nature");
    const por = document.getElementById("portraits");
    const spo = document.getElementById("sports");
    const oth = document.getElementById("others");
    por.style.animation ='fadeIn 1s';

    nat.style.display = "none";
    por.style.display = "block";
    spo.style.display = "none";
    oth.style.display = "none";

    document.getElementById('bottomBody').style.backgroundImage="linear-gradient(to right, #ffffdf, #fdffd7, #fbffcf, #f9ffc7, #f6ffbf)";
}

function sports() 
{
    const nat = document.getElementById("nature");
    const por = document.getElementById("portraits");
    const spo = document.getElementById("sports");
    const oth = document.getElementById("others");
    spo.style.animation ='fadeIn 1s';

    nat.style.display = "none";
    por.style.display = "none";
    spo.style.display = "block";
    oth.style.display = "none";

    document.getElementById('bottomBody').style.backgroundImage="linear-gradient(to left bottom, #ff8c8c, #ff8784, #ff837b, #ff7f71, #ff7b68)";
}

function other() 
{
    const nat = document.getElementById("nature");
    const por = document.getElementById("portraits");
    const spo = document.getElementById("sports");
    const oth = document.getElementById("others");
    spo.style.animation ='fadeIn 1s';

    nat.style.display = "none";
    por.style.display = "none";
    spo.style.display = "none";
    oth.style.display = "block";

    document.getElementById('bottomBody').style.backgroundImage="linear-gradient(to right top, #ffb0f1, #ffa9f2, #ffa2f4, #ff9bf5, #ff94f7, #ff8df5, #ff86f2, #ff7ef0, #ff74e8, #fe69e1, #fe5ed8, #fd51d0)";
}