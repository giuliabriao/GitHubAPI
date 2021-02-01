class UserModel{
    constructor(){
        this._name = "";
        this._avatar_url = "";
        this._bio = "";
        this._repos = [];
    }

    get name(){
        return this._name;
    }

    get avatar_url(){
        return this._avatar_url;
    }

    get bio(){
        return this._bio;
    }

    get repos(){
        return this._repos;
    }

    getUserData(login){

        let url = `https://api.github.com/users/${login}`;

        let request = new XMLHttpRequest();

        let repoSetModel = new RepoSetModel();

	    request.open("GET", url, false);

        request.addEventListener("load", () => {

            if(request.status == 200){
                let response = JSON.parse(request.responseText);

                this._name = response.name;
                this._avatar_url = response.avatar_url;
                this._bio = response.bio;

                repoSetModel.getReposData(login)

                this._repos.push(repoSetModel.repo_set())

            }
        });

        request.send();
    }
}