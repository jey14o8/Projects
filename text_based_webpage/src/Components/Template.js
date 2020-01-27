//template object used to store and return the values about the user. 
class Template {

    constructor(Id, Firstname, Lastname, Age, About, Hobbies, Goals, futurePlans) {
        this.Id = Id;
        this.Firstname = Firstname;
        this.Lastname = Lastname;
        this.Age = Age;
        this.About = About;
        this.Hobbies = Hobbies;
        this.Goals = Goals;
        this.futurePlans = futurePlans;
    }
    //all setter and getters
    getid() {
        return this.Id;
    }
    getfirstname() {
        return this.Firstname;
    }
    getlastname() {
        return this.Lastname;
    }
    getage() {
        return this.Age;
    }
    getabout() {
        return this.About;
    }
    gethobbies() {
        return this.Hobbies;
    }
    getgoals() {
        return this.Goals;
    }
    getfutureplans() {
        return this.futurePlans;
    }
}
//export the component to be used in the app class.
export default Template;
