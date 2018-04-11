class userComponent{
    constructor(){
        this.id;
        this.name = "";
        this.mail = "";
        this.type = "";
        this.skill = [];
    }
    setUser(id){
        let us = db.getUser(id);
        this.id = id;
        this.name = us['USE_NAME'];
        this.mail = us['USE_MAIL'];
        this.type = db.getUserType(id)['UT_LIB'];
    }
    getUserId(){
        return this.id;
    }
    getUserName(){
        return this.name;
    }
    getUserMail(){
        return this.mail;
    }
    getUserType(){
        return this.type;
    }
    getUserSkill(){
        return this.skill;
    }
}