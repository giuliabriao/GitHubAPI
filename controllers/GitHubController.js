class GitHubController{

    searchUser(login){
        let userModel = new UserModel(); //instanciando o Model do usuário
        userModel.getUserData(login);

        let userView = new UserView(userModel); //instanciando a View do usuário e passando como parametro a Model instanciada acima
        userView.renderUser();

        let repoSetModel = new RepoSetModel(); //in
        repoSetModel.getReposData(login);

        let reposView = new ReposView(repoSetModel);
        reposView.renderRepos();
    }
};

let gitHubController = new GitHubController();

let inputUsername = document.querySelector("#username");

let button = document.querySelector("#findUser")
button.addEventListener("click", () => {
    gitHubController.searchUser(inputUsername.value);
});