var catsArray = [{
    name: "Kissa",
    age: 7,
    color: "Black & Orange",
    fluffLevel: 5,
    owner: "Grandma",
    picture: "img/kissa.jpg", 
    id: "kissa"
}, {
    name: "Pico",
    age: 10,
    color: "Orange & Cream",
    fluffLevel: 1,
    owner: "Jan",
    picture: "img/pico.jpg",
    id: "pico"
}, {
    name: "Bear",
    age: 12,
    color: "Black",
    fluffLevel: 4,
    owner: "Jan",
    picture: "img/bear.jpg",
    id: "bear"
},{
    name: "Olli",
    age: "10 Weeks",
    color: "White & Orange",
    fluffLevel: 2,
    owner: "Me",
    picture: "img/olli.jpg",
    id: "olli"
}, {
    name: "Osmo",
    age: "10 Weeks",
    color: "White & Orange",
    fluffLevel: 3,
    owner: "Me",
    picture: "img/osmo.jpg",
    id: "osmo"
}]

var vueApp = new Vue({
    el: "#catList",
    data: {
      cats: catsArray,
      nameInput: "",
      ageInput: "",
      colorInput: "",
      fluffInput: "",
      ownerInput: "",
      pictureInput: "",
      idInput: ""
    },
    methods: {
        deleteCat: function(catObject){
            this.cats = this.cats.filter(function(favs){
                if (favs.id !== catObject.id) {
                    return true;
                } else {
                    return false;
                }
            })
            
        },
        addCat: function(){
            let newCat = {
                name: this.nameInput,
                age: this.ageInput,
                color: this.colorInput,
                fluffLevel: this.fluffInput,
                owner: this.ownerInput,
                picture: this.pictureInput,
                id: this.idInput
            };
            this.cats.push(newCat);
            this.nameInput = this.ageInput = this.colorInput = this.fluffInput = this.ownerInput = this.pictureInput = this.idInput = "";
            if (this.pictureInput === "") {
                newCat.picture = "img/placeholdercat.jpg";
            };
        },
    }
  });