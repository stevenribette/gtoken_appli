class meetListComponent{
    constructor(){
        this.meets = [];
    }
    template(){
        $("#centralApp").load("src/meet-section/meet-list/meet-list.html");
        this.setData();
    }
    setData(){
        let us = user.getUserId();
        let type = user.getUserType();
        if(type=="Pedago"){
            let meets = db.getAllMeet();
            this.meets = meets;
        }else if(type=="Etudiant"){
            let meets = db.getMeetBySender(us);
            this.meets = meets;
        }else if(type=="Intervenant"){
            let meets = db.getMeetByReceiver(us);
            this.meets = meets;
        }
        let container = "";
        let tmp = [];
        for(let e of this.meets){
            let o = {};
            let d = new meetComponent(e);
            container += d.template();
            tmp.push(d);
        }
        this.meets = tmp;
        setTimeout(function(){
            $("#meets").replaceWith(container);
        }, 100);
    }
}