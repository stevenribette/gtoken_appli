class menuComponent{
    template(){
        $("#menu").load("src/menu/menu.html");
        this.checkPedago();
    }
    open() {
        document.getElementById("menu").style.width = "20%";
        document.getElementById("centralApp").style.marginLeft = "20%";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    close() {
        document.getElementById("menu").style.width = "0";
        document.getElementById("centralApp").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }
    checkPedago(){
        if(user.getUserType()=="Pedago"){
            toggleDisplay("userListEtudiant");
            toggleDisplay("userListIntervenant");
        }
    }
    loadUserList(type){
        loadView("userList");
        initUserList();
    }
}