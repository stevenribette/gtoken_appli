class loginComponent{
    constructor(){
        this.user = 0;
        this.pwd = 0;
    }
    connexionTemplate(){
        $("#centralApp").load("src/login/connexion.html");
    }
    checkLogin(id){
        if($('#'+id+'').val()!=""){
            if(id=="login_user"){
                this.user=1;
            }else if(id=="login_pwd"){
                this.pwd=1;
            }
        }else{
            if(id=="login_user"){
                this.user=0;
            }else if(id=="login_pwd"){
                this.pwd=0;
            }
        }
        if(this.user==1 && this.pwd==1){
            $('#btn_login').removeClass("disabled");
            $('#btn_login').attr('onClick', 'loginComponent.connexion()');
        }
        if(this.user==0 || this.pwd==0){
            $('#btn_login').addClass("disabled");
            $('#btn_login').removeAttr('onclick');
        }
    }
    connexion(){
        var us = $("#login_user").val();
        var pw = $("#login_pwd").val();
        var userId = db.checkUser(us, pw);
        if(userId != false){
            toggleDisplay("navbar-menu");
            stor.setItem("user",JSON.stringify([userId,us,pw]));
            //mediatekComponent.template();
        }
    }
    retrieveUser(){
        if(stor.getItem("user")){
            var userData = stor.getItem("user");
            this.connexion(userData[1], userData[2])
        }else{
            this.connexionTemplate();
        }
    }
    disconnexion(){
        stor.removeItem("user");
        return true;
    }
}