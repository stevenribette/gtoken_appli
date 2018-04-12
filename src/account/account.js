class accountComponent{
    constructor(){

    }
    template(){
        $("#centralApp").load("src/account/account.html");
        this.setAccount();
    }
    setAccount(){
        let container = "";
        
        container += "<div class='project_data card'>";
        container += "<ul class='list-group list-group-flush'>";
        container += "<li class='list-group-item'>Identifiant : " + user['name'] + "</li>";
        container += "<li class='list-group-item'>Mail : " + user['mail'] + "</li>";
        container += "<li class='list-group-item'>Type : " + user['type'] + "</li>";
        container += "<li class='list-group-item'><buton class='btn btn-primary' onclick='accountComponent.disconect()'>Déconnexion</buton></li>";
        container += "</ul>";
        container += "</div>";

        setTimeout(function(){
            $("#account_content").replaceWith(container);
        }, 100);
    }
    disconect(){
        stor.removeItem('user');
        toggleDisplay("navbar-menu");
        user.removeUser();
        loginComponent.connexionTemplate();
    }

}