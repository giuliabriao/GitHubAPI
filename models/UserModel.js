class UserModel{
    constructor(){
        this._name = "";
        this._avatar_url = "";
        this._bio = "" || "Oops, this user doesn't have a bio.";
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


    getUserData(login){

        let url = `https://api.github.com/users/${login}`;

        let request = new XMLHttpRequest();

	    request.open("GET", url, false);

        request.addEventListener("load", () => {

            if(request.status == 200){
                document.querySelector("#error").innerHTML = "";
                
                let response = JSON.parse(request.responseText);

                this._name = response.name || "Null Name";
                this._avatar_url = response.avatar_url;
                this._bio = response.bio || "This user doesn't have a bio";
                
            }else{
                let error = document.querySelector("#error");
                error.innerHTML = "Oops, I think this username doesn't exist! Try again!"

            }
        });
        request.send();
    }
};