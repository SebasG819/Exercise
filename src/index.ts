
import { Attribute } from "./components/Profile/profile";
import "./components/Profile/profile"
import { Profile } from "./components/export";
import { data } from "./data"

class AppContainer extends HTMLElement {
    profiles: Profile[] = [];

    constructor(){
        super();
        this.attachShadow({mode:"open"});

        data.forEach((user) => {
            const Cardfutbol = this.ownerDocument.createElement("my-profile") as Profile;
            Cardfutbol.setAttribute(Attribute.name,user.name);
            Cardfutbol.setAttribute(Attribute.images,user.images);
            Cardfutbol.setAttribute(Attribute.age,user.age);
            Cardfutbol.setAttribute(Attribute.gender,user.gender);
            Cardfutbol.setAttribute(Attribute.country,user.country);
            this.profiles.push(Cardfutbol);
        })
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
        `;

            this.profiles.forEach((profile) => {
                this.shadowRoot?.appendChild(profile);
            })
        }
    }
}

customElements.define("app-container",AppContainer);