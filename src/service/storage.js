class storageService{
    //connexion to localstorage
    getItem(key){
        if(storage.getItem(key)){
            return JSON.parse(storage.getItem(key));
        }else{
            return false;
        }
    }
    setItem(key,val){
        if(storage.getItem(key)){
            storage.setItem(key,val);
            return "edit";
        }else{
            storage.setItem(key,val);
            return "new";
        }
    }
    removeItem(key){
        if(storage.getItem(key)){
            storage.removeItem(key);
            return true;
        }else{
            return false;
        }
    }
}