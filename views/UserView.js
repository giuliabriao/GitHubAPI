class UserView{
    constructor(model){

        let $ = document.createElement.bind(document);

        this._user = $("p");
        this._user.setAttribute("class", "name")
        this._user.innerText = `${model.name}`;

        this._avatar = $("img");
        this._avatar.setAttribute("class", "avatar")
        this._avatar.src = `${model.avatar_url}`
        this._avatar.innerHTML = `${model.avatar_url}`;

        this._bio = $("p");
        this._bio.setAttribute("class", "bio")
        this._bio.innerText = `${model.bio}`;

    };

    renderUser(){ //renderizando na tela
        this.clearPage("#userInfo");
        let userInfoDiv = document.querySelector("#userInfo");
        userInfoDiv.appendChild(this._user);
        userInfoDiv.appendChild(this._avatar);
        userInfoDiv.appendChild(this._bio);
    };

    clearPage(id){
        document.querySelector(`${id}`).innerHTML = "";
    }
};