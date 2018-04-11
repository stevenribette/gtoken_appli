apiUrl = "http://localhost/gtoken/api.php";
function menuGo(){
    toggleDisplay('centralApp');
    toggleDisplay('menu');
}
function menucl(param,value){
    loadDoc(param,value);
    menuGo();
}
function toggleDisplay(elmt){
    if(typeof elmt == "string")
        elmt = document.getElementById(elmt);
    if(elmt.style.display == "none"){
        elmt.style.display = "";
    }else{
        elmt.style.display = "none";
    }
}
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
function getDB(fct, param) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            return this.responseText;
        }
    };
    xhttp.open("GET", url+parame+"", true);
    xhttp.send();
}
function postDB(fct, param) {
    data = {};
    data[fct] = JSON.stringify(param);
    ret = $.ajax({
        type: 'post',
        url: apiUrl,
        data: data,
        dataType: 'json',
        async: false,
        success: function(result, statut){},
        error : function(result, statut, erreur){},
        complete : function(result, statut){}
    });
    return JSON.parse(ret.responseText);
}
function loadView(view){
    try{
        eval(view+'Component').template();
        elmt = document.getElementById('centralApp');
        if(elmt.style.display == "none"){
            menuGo();
        }
    }catch(e){
        //console.log(e);
    }
}