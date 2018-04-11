class dbService{
    //connexion to database

    //###############################
    // USER
    //###############################
    addUser(user,pwd,mail,type){
        return postDB("add_user", { "prm_name" : user, "prm_pwd" : pwd, "prm_mail" : mail, "prm_type" : type });
    }
    getUser(id){
        return postDB("get_user", { "prm_id" : id });
        //return { "name" : "A", "img" : '', "share" : false };
    }
    getUserByType(id){
        return postDB("get_user_by_type", { "prm_id" : id });
    }
    setUserName(id,name){
        return postDB("set_user_name", { "prm_id" : id, "prm_name" : name });
    }
    setUserPwd(id,pwd){
        return postDB("set_user_pwd", { "prm_id" : id, "prm_pwd" : pwd });
    }
    setUserMail(id,name){
        return postDB("set_user_mail", { "prm_id" : id, "prm_mail" : mail });
    }
    removeUser(){
        return postDB("remove_user", { "prm_id" : id });
    }
    
    checkUser(name,pwd){
        return postDB("check_user", { "prm_name" : name, "prm_pwd" : pwd });
    }

    addRequest(pro_id,use_id){
        return postDB("add_request", { "prm_pro_id" : pro_id, "prm_use_id" : use_id });
    }
    getRequest(id){
        return postDB("get_request", { "prm_id" : id });
    }
    setRequest(id,state){
        return postDB("set_request", { "prm_id" : id, "prm_state" : state });
    }

    addProject(name,desc,token,use_id,date_debut,date_fin,gski_id){
        return postDB("add_project", { "prm_name" : name, "prm_desc" : desc, "prm_token" : token, "prm_use_id" : use_id, "prm_date_debut" : date_debut, "prm_date_fin" : date_fin, "prm_gski_id" : gski_id });
    }
    getProject(id){
        return postDB("get_project", { "prm_id" : id });
    }
    setProjectName(id,name){
        return postDB("set_project_name", { "prm_id" : id, "prm_name" : name });
    }
    setProjectDesc(id,desc){
        return postDB("set_project_desc", { "prm_id" : id, "prm_desc" : desc });
    }
    addToken(id,token){
        return postDB("add_token", { "prm_id" : id, "prm_token" : token });
    }
    substractToken(id,token){
        return postDB("substract_token", { "prm_id" : id, "prm_token" : token });
    }
    setProjectAdmin(id,admin){
        return postDB("set_project_admin", { "prm_id" : id, "prm_admin" : admin });
    }
    setProjectStart(id,date){
        return postDB("set_project_start", { "prm_id" : id, "prm_date" : date });
    }
    setProjectEnd(id,date){
        return postDB("set_project_end", { "prm_id" : id, "prm_date" : date });
    }
    setProjectSkill(id,gski_id){
        return postDB("set_project_skill", { "prm_id" : id, "prm_gski_id" : gski_id });
    }
    removeProject(id){
        return postDB("remove_project", { "prm_id" : id });
    }

    addUserProject(pro_id, use_id){
        return postDB("add_user_project", { "prm_pro_id" : pro_id, "prm_use_id" : use_id });
    }
    removeUserProject(id){
        return postDB("remove_user_project", { "prm_id" : id });
    }

    getMeet(id){
        return postDB("get_meet", { "prm_id" : id });
    }
    addMeet(object,desc,sender,receiver,date){
        return postDB("add_meet", { "prm_object" : object, "prm_desc" : desc, "prm_sender" : sender, "prm_receiver" : receiver, "prm_date" : date });
    }
    setMeetState(id,state){
        return postDB("set_meet_state", { "prm_id" : id, "prm_state" : state });
    }
    setMeetDate(id,date){
        return postDB("set_meet_date", { "prm_id" : id, "prm_date" : date });
    }
    getGSkill(id){
        return postDB("get_gskill", { "prm_id" : id });
    }
    getSkill(id){
        return postDB("get_skill", { "prm_id" : id });
    }
    addGSkill(lib){
        return postDB("add_gskill", { "prm_lib" : lib });
    }
    addSkill(lib,gski_id){
        return postDB("add_skill", { "prm_lib" : lib, "prm_gski_id" : gski_id });
    }
    setSkillG(ski_id, gski_id){
        return postDB("set_skill_g", { "prm_ski_id" : ski_id, "prm_gski_id" : gski_id });
    }
    addUserSkill(use_id, ski_id){
        return postDB("add_user_skill", { "prm_use_id" : use_id, "prm_ski_id" : ski_id });
    }
    removeUserSkill(id){
        return postDB("remove_user_skill", { "prm_id" : id });
    }
    getUserBySkill(id){
        return postDB("get_userId_by_skill", { "prm_id" : id });
    }
    getRequestByProject(id){
        return postDB("get_request_by_project", { "prm_id" : id });
    }
    getMeetBySender(id){
        return postDB("get_meet_by_sender", { "prm_id" : id });
    }
    getMeetByReceiver(id){
        return postDB("get_meet_by_receiver", { "prm_id" : id });
    }
    getProjectBySkill(id){
        return postDB("get_project_by_skill", { "prm_id" : id });
    }
}