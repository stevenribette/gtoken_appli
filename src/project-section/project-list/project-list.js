class projectListComponent{
    constructor(){
        this.projects = [];
    }
    template(){
        $("#centralApp").load("src/project-section/project-list/project-list.html");
        this.setData();
    }
    setData(){
        let us = user.getUserId();
        let type = user.getUserType();
        if(type=="Pedago" || type=="Etudiant"){
            let projects = db.getAllProject();
            this.projects = projects;
        }else if(type=="Intervenant"){
            let skills = db.getUserSkill(us);
            for(let c of skills){
                let gskill = db.getSkill(c)['GSKI_ID'];
                let projects = db.getProjectBySkill(gskill)['PRO_ID'];
                for(let e of projects){
                    this.projects.push(e['PRO_ID']);
                }
            }
        }
        this.createData();
    }
    createData(){
        let container = "";
        container += "<div class='project_data card'>";
        container += "<ul class='list-group list-group-flush'>";
        let tmp = [];
        for(let e of this.projects){
            let o = {};
            let d = new projectComponent();
            d.setProjectListItem(e);
            container += "<li class='list-group-item'>"+ d.getContent() + "</li>";
            tmp.push(d);
        }
        container += "</ul>";
        container += "</div>";
        var that = this;
        setTimeout(function(){
            if(that.projects.length>0){
                that.projects = tmp;
                $("#projects").replaceWith(container);
            }else{
                $("#projects").replaceWith("Il n'y a aucun projet actuellement");
            }
        }, 100);
    }
}