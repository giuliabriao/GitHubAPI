class UserController{

    searchUser(login){
        let userModel = new UserModel(); //instanciando o Model do usuário
        userModel.getUserData(login);

        let userView = new UserView(userModel); //instanciando a View do usuário
        let userInfoDiv = document.querySelector("#userInfo");
        userView.render(userInfoDiv);
    }
};

let userController = new UserController();

let inputUsername = document.querySelector("#username");


let button = document.querySelector("#findUser")
button.addEventListener("click", () => {
    userController.searchUser(inputUsername.value);
});