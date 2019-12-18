class Model {
    constructor() {
        this._persons = [];
    }

    getPersons = () => {
        return this._persons;
    }

    addPersons = (persons) => this._persons.push(persons);

    deletePersons = (id) => this._persons.splice(id);
}


export default Model;