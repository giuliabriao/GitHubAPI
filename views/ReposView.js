class ReposView{
    constructor(repoSetModel){

        let $ = document.createElement.bind(document);

        let repositories = "";

        repoSetModel.repo_set.forEach( (element) => {

            repositories += `<li class='reposLi'><a class='reposLink' href='${element.url}'>${element.name}</a></li><p class="language">Main language: ${element.language}</p>`
        });

        this._repositories_html = repositories
        
    }

    renderRepos(){
        this.clearPage("#repositories");

        let reposUl = document.querySelector("#repositories");
        reposUl.innerHTML = this._repositories_html
    }

    clearPage(id){
        document.querySelector(`${id}`).innerHTML = "";
    }
};