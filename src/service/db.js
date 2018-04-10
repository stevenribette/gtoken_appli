class dbService{
    //connexion to database

    //###############################
    // USER
    //###############################
    getUser(id){
        return postDB("get_user", { "prm_id" : id });
        //return { "name" : "A", "img" : '', "share" : false };
    }
    addUser(user,pwd,mail,type){
        return postDB("add_user", { "prm_name" : user, "prm_pwd" : pwd, "prm_mail" : mail, "prm_type" : type });
    }
    removeUser(){
        return postDB("remove_user", { "prm_id" : id });
    }
    checkUser(user,pwd){
        postDB("check_user", { "prm_user" : user, "prm_pwd" : pwd });
        return 1;
    }
    setUserName(id, name){
        return postDB("user/SetName", { "use_id" : id, "prm_name" : name });
    }
}