class searchComponent{
    constructor(){

    }
    template(){
        $("#centralApp").load("src/search/search.html");
        this.setSearch();
    }
    setSearch(){
        let us = user.getUserId();
        let type = user.getUserType();
        let p_pro = user.getUserProject();
        if(type=="Pedago"){

        }else if(type=="Etudiant"){
            if(p_pro){
                
            }else{

            }
        }else if(type=="Intervenant"){

        }
    }
}