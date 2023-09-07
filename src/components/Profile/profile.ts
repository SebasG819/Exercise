export enum Attribute {
    "name" = "name",
    "age" = "age",
    "gender" = "gender",
    "country" = "country",
    "images" = "images"
}

class Profile extends HTMLElement{
    
    name?: string;
    age?: number;
    gender?: string;
    country?: string;
    images?: string;
    
    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            country: null,
            age: null,
            gender: null,
            name: null,
            images: null,

            
        }
        return Object.keys(attrs); 
    }
    
    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            case Attribute.age:
                
                this.age = newValue ? Number(newValue) : undefined;
            break;

            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }
    
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
            <link rel="stylesheet" href="../src/components/Profile/profile.css">
            <h1>${this.name}</h1>
            <p>Age: ${this.age}</p>
            <p>Gender: ${this.gender}</p>
            <p>From: ${this.country}</p>
            <img src=${this.images}></img>
            <button>Like</button>

            </section>
            `
        }
    }
}

customElements.define("my-profile",Profile);
export default Profile;