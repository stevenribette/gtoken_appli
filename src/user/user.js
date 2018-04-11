class userComponent{
    constructor(){
        this.id;
        this.name = "";
        this.mail = "";
        this.type = "";
        this.skill = [];
        this.project;
    }
    setUser(id){
        let us = db.getUser(id);
        this.id = id;
        this.name = us['USE_NAME'];
        this.mail = us['USE_MAIL'];
        this.type = db.getUserType(id)['UT_LIB'];
        let sk = db.getUserSkill(id);
        if(sk){
            for(let e of sk){
                this.skill.push(e);
            }
        }
        let pr = db.getProject(id);
        if(pr){
            this.project = pr['PRO_ID'];
        }
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
    getUserProject(){
        return this.project;
    }
}