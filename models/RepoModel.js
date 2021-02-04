class RepoModel{
    constructor(name, url, language){
        this._name = name;
        this._url = url;
        this._language = language;
    }

    get name(){
        return this._name;
    }

    get url(){
        return this._url;
    }

    get language(){
        return this._language;
    }
};