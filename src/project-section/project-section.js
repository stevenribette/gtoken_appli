class projectSectionComponent{
    constructor(){

    }
    template(){
        if(user.getUserProject()){
            projectComponent.setProject(user.getUserProject());
            projectComponent.template();
        }else{
            projectListComponent.template();
        }
    }
}