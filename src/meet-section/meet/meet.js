class meetComponent{
    constructor(id){
        this.meet = db.getMeet(id);
        this.content = "";
        this.setContent(this.meet);
    }
    template(){
        return this.content;
    }
    setContent(meet){
        this.content = "<div class='' onclick=''><p>" + meet['MEE_OBJECT'] + "</p></div>";
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