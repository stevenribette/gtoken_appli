class intervenantComponent{
    constructor(id){
        this.intervenant = db.getUser(id);
        this.content = ""; 
    }
    template(){
        return this.content;
    }
}