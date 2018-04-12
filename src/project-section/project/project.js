class projectComponent{
    constructor(){
        this.content = "";
        this.project;
    }
    setProject(id){
        this.project = db.getProject(id);
        //this.project['PRO_ADMIN'] = 0;
        this.setContent(this.project);
    }
    template(){
        $("#centralApp").load("src/project-section/project/project.html");
        this.setData();
    }
    setData(){
        let content = this.content;
        var that = this;
        setTimeout(function(){
            $("#project_data").replaceWith(content);
            that.setAdminForm(that.project);
        }, 100);
    }
    getContent(){
        return this.content;
    }
    setContent(project){
        let type = user.getUserType();
        if(type=="Etudiant"){
            let id = user.getUserId();
            if(id == parseInt(project['PRO_ADMIN'])){
                this.setAdminContent();
            }else{
                this.setEtudiantContent(project);
            }
        }else if(type=="Intervenant"){
            this.setIntervenantContent(project);
        }else if(type=="Pedago"){
            this.setPedagoContent(project);   
        }
    }
    setIntervenantContent(p){
        this.content = "<div class='' onclick=''><p>" + p['PRO_NAME'] + "</p></div>";
    }
    setEtudiantContent(p){
        let container = "";
        container += "<div class='project_data card'>";
        container += "<ul class='list-group list-group-flush'>";
        container += "<li class='list-group-item'>Nom : " + p['PRO_NAME'] + "</li>";
        container += "<li class='list-group-item'>Description : " + p['PRO_DESC'] + "</li>";
        container += "<li class='list-group-item'>Jeton : " + p['PRO_TOKEN'] + "</li>";
        container += "<li class='list-group-item'>Début : " + p['PRO_DATE_DEBUT'] + "</li>";
        if(p['PRO_DATE_FIN']){
            container += "<li class='list-group-item'>FIN : " + p['PRO_DATE_FIN'] + "</li>";
        }
        container += "<li class='list-group-item'>Compétence : " + db.getGSkill(p['GSKI_ID'])['GSKI_LIB'] + "</li>";
        container += "</ul>";
        container += "</div>";
        let p_users = db.getProjectUser(p['PRO_ID']);
        container += "<div class='project_data card'>";
        container += "<ul class='list-group list-group-flush'>";
        container += "<li class='list-group-item'>Participants</li>";
        for(let u of p_users){
            if(u == p['PRO_ADMIN']){
                let us = db.getUser(u)['USE_NAME'];
                container += "<li class='list-group-item'>Admin : " + us + "</li>";
            }else{
                let us = db.getUser(u)['USE_NAME'];
                container += "<li class='list-group-item'>" + us + "</li>";
            }
        }
        container += "</ul>";
        container += "</div>";
        this.content = container;
    }
    setPedagoContent(p){
        this.content = "<div class='' onclick=''><p>" + p['PRO_NAME'] + "</p></div>";
    }
    setAdminContent(){
        let container = "";
        container += "<div class='project_form card'>";
        container += "<ul class='list-group list-group-flush'>";
        container += "<li class='list-group-item'>Nom :<div class='form-group'><input type='text' class='form-control' id='p_name'></div></li>";
        container += "<li class='list-group-item'>Description :<div class='form-group'><input type='text' class='form-control' id='p_desc'></div></li>";
        container += "<li class='list-group-item'>Jeton :<div class='form-group'><input readonly type='number' min='0' class='form-control' id='p_token'></div></li>";
        container += "<li class='list-group-item'>Début :<div class='form-group'><input readonly type='date' class='form-control' id='p_start'></div></li>";
        container += "<li class='list-group-item'>Fin :<div class='form-group'><input type='date' class='form-control' id='p_end'></div></li>";
        container += "</ul>";
        container += "</div>";
        this.content = container;
    }
    setAdminForm(p){
        $('#p_name').val(p['PRO_NAME']);
        $('#p_desc').val(p['PRO_DESC']);
        $('#p_token').val(p['PRO_TOKEN']);
        $('#p_start').val(p['PRO_DATE_DEBUT']);
        if(p['PRO_DATE_FIN']){
            $('#p_end').val(p['PRO_DATE_FIN']);
        }
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