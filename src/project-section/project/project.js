class projectComponent{
    constructor(){
        this.content = "";
        this.project;
    }
    setProjectListItem(id){
        this.project = db.getProject(id);
        this.setContent(this.project);
    }
    setProjectInterface(id){
        this.template();
        this.project = db.getProject(id);
        this.project['PRO_ADMIN'] = 0;
        let use_id = user.getUserId();
        if(use_id == parseInt(this.project['PRO_ADMIN'])){
            this.setAdminInterface(this.project);
        }else{
            this.setEtudiantInterface(this.project);
        }
    }
    template(){
        $("#centralApp").load("src/project-section/project/project.html");
    }
    getContent(){
        return this.content;
    }
    setContent(project){
        let type = user.getUserType();
        if(type=="Etudiant"){
            this.setEtudiantListItem(project);
        }else if(type=="Intervenant"){
            this.setIntervenantListItem(project);
        }else if(type=="Pedago"){
            this.setPedagoListItem(project);   
        }
    }
    setEtudiantInterface(p){
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
        setTimeout(function(){
            $("#project_data").replaceWith(container);
        }, 100);
    }
    setAdminInterface(p){
        $("#project_data").replaceWith("<div id='project_info'></div><div id='project_users_info'></div>");
    }
    setAdminData(p){
        $('#p_name').val(p['PRO_NAME']);
        $('#p_desc').val(p['PRO_DESC']);
        $('#p_token').val(p['PRO_TOKEN']);
        $('#p_start').val(p['PRO_DATE_DEBUT']);
        if(p['PRO_DATE_FIN']){
            $('#p_end').val(p['PRO_DATE_FIN']);
        }
        $('#p_skill').val(db.getGSkill(p['GSKI_ID'])['GSKI_LIB']);
    }

    setIntervenantListItem(p){
        this.content = "<div class='' onclick=''><p>" + p['PRO_NAME'] + "</p></div>";
    }
    setEtudianListItem(p){
        this.content = "<div class='' onclick=''><p>" + p['PRO_NAME'] + "</p></div>";
    }
    setPedagoListItem(p){
        this.content = "<div class='' onclick=''><p>" + p['PRO_NAME'] + "</p></div>";
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