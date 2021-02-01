class UserController{

    searchUser(login){
        let userModel = new UserModel();
        userModel.getUserData(login);

        let userView = new UserView(userModel);
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