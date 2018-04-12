class projectSectionComponent{
    constructor(){

    }
    template(){
        if(user.getUserProject()){
            projectComponent.setProjectInterface(user.getUserProject());
            projectComponent.template();
        }else{
            projectListComponent.template();
        }
    }
}