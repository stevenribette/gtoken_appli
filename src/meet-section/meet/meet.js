class meetComponent{
    constructor(id){
        this.meet = db.getMeet(id);
        this.content = "";
        let us = user.getUserId();
        let type = user.getUserType();
        if(type=="Pedago"){
            
        }else if(type=="Etudiant"){
            this.setEtudiantContent(this.meet);
        }else if(type=="Intervenant"){
            
        }
    }
    template(){
        return this.content;
    }
    setEtudiantContent(m){
        let container = "";
        
        container += "<div class='project_data card'>";
        container += "<ul class='list-group list-group-flush'>";
        container += "<li class='list-group-item' style='background-color:"+this.setColor(m['MEE_STATE'])+";'>Object : " + m['MEE_OBJECT'] + "</li>";
        container += "<li class='list-group-item'>Destinataire : " + db.getUser(m['MEE_RECEIVER'])['USE_NAME'] + "</li>";
        container += "<li class='list-group-item'>Date : " + m['MEE_DATE'] + "</li>";
        container += "<li class='list-group-item'>Description : " + m['MEE_DESC'] + "</li>";
        container += "</ul>";
        container += "</div>";
        this.content = container;
    }
    setColor(state){
        if(state==true){
            return "green";
        }else if(state==false){
            return "red";
        }else if(state==null){
            return "white";
        }
    }
}