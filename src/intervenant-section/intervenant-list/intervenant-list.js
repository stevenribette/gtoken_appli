class intervenantListComponent{
    constructor(){
        this.intervenants = [];
        this.skill;
    }
    template(){
        $("#centralApp").load("src/intervenant-section/intervenant-list/intervenant-list.html");
    }
    setSkill(sk){
        this.skill = sk;
        this.setData();
    }
    setData(){
        if(user.getUserType()=="Pedago"){
            let intervenant = db.getAllUser();
            let arr = [];
            for(let e of intervenant){
                if(db.getUserType(db.getUser(e)['UT_ID']) == "Intervenant"){
                    console.log(e);
                }
            }
        }else if(user.getUserType()=="Etudiant"){

        }
    }
}