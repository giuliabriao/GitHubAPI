class RepoSetModel{
    constructor(){
        this._repo_set = [];
    };

    get repo_set(){
        return this._repo_set
    }

    getReposData(login){
        let request = new XMLHttpRequest();

        request.open("GET", `https://api.github.com/users/${login}/repos`, false);
        
        request.addEventListener("load", () => {
            if(request.status == 200){
                let reposResponse = JSON.parse(request.responseText);

                let repos = reposResponse.map((repo) => {
                    return new RepoModel(repo.name, repo.html_url, repo.language);
                });

                this._repo_set = repos
            }
        });

        request.send();
    }
};