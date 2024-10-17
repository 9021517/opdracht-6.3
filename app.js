function kleur_aanpassen() {
    var HeadingToAdjust = document.getElementById("TestHeader2");
    HeadingToAdjust.style.color ="Orange";
    HeadingToAdjust.innerHTML ="Inhoud aangepast";

}

kleur_aanpassen();

function kleur_terugzetten()  {
    var HeadingToAdjust = document.getElementById("TestHeader2");
    HeadingToAdjust.style.color ="#000000";
    HeadingToAdjust.innerHTML = "Header2";

}
