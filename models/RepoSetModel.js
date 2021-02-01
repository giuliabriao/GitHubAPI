class RepoSetModel{
    constructor(){
        this._repo_set = [];
    };

    get repo_set(){
        return this.repo_set
    }

    getReposData(username){
        let request = new XMLHttpRequest();

        request.open("GET", `https://api.github.com/users/${username}/repos`, false);
        
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
}