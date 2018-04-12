class skillListComponent{
    constructor(){
      this.skills = [];
    }
    template(){
        $("#centralApp").load("src/skill-section/skill-list/skill-list.html");
        this.setData();
    }
    setData(){
        let us = user.getUserId();
        let type = user.getUserType();
        if(type=="Pedago"){
            let skills = db.getAllSkill();
            this.skills = skills;
        }else if(type=="Etudiant"){
            let skills = db.getUserSkill(us);
            this.skills = skills;
        }else if(type=="Intervenant"){
            let skills = db.getUserSkill(us);
            this.skills = skills;
        }
        let container = "";
        container += "<div class='project_data card'>";
        container += "<ul class='list-group list-group-flush'>";
        let tmp = [];
        for(let e of this.skills){
            let o = {};
            let d = new skillComponent();
            d.setSkill(e);
            container += "<li class='list-group-item'>"+ d.getContent() + "</li>";
            tmp.push(d);
        }
        container += "</ul>";
        container += "</div>";
      var that = this;
      setTimeout(function(){
        if(that.skills.length>0){
            that.skills = tmp;
            $("#skills").replaceWith(container);
        }else{
            $("#skills").replaceWith("Il n'y a aucune compétences");
        }
      }, 100);
  }
}