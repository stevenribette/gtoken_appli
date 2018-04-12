class skillComponent{
    constructor(){
        this.content = "";
        this.skill;
        this.id;
    }
    getContent(){
        return this.content;
    }
    setSkill(id){
        this.skill = db.getSkill(id)['SKI_LIB'];
        this.id;
        this.setContent(this.skill);
    }
    setContent(skill){
        let type = user.getUserType();
        if(type=="Etudiant" || type=="Intervenant"){
            this.setNormalContent(skill);
        }else if(type=="Pedago"){
            this.setFormContent();   
        }
    }
    setNormalContent(s){
        this.content = s;
    }
    setFormContent(){
        this.content = "<div class='form-group'><input type='text' class='form-control' id='ski_lib_"+this.id+"'></div>";
    }
    setFormValue(s){
        $('#ski_lib_'+this.id+'').val(s['SKI_LIB']);
    }
}