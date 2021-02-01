class UserView{
    constructor(model){

        this._user = document.createElement("p");
        this._user.setAttribute("class", "paragraphs")
        this._user.innerText = `${model.name}`;

        this._avatar = document.createElement("img");
        this._avatar.setAttribute("class", "avatar")
        this._avatar.src = `${model.avatar_url}`
        this._avatar.innerHTML = `${model.avatar_url}`;

        this._bio = document.createElement("p");
        this._bio.setAttribute("class", "paragraphs")
        this._bio.innerText = `${model.bio}`;

    };

    render(parentElement){ //renderizando na tela
        this.clearPage();
        parentElement.appendChild(this._user);
        parentElement.appendChild(this._avatar);
        parentElement.appendChild(this._bio);
    };

    clearPage(){
        document.querySelector("#userInfo").innerHTML = "";
    }
}