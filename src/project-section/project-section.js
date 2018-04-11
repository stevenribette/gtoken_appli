class projectSectionComponent{
    constructor(){

    }
    template(){
        if(user.getUserProject()){
            projectComponent.template();
        }else{
            projectListComponent.template();
        }
    }
}