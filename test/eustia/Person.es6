Person = class {
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    introduce()
    {
        return 'I am ' + this.name + ', ' + 'I\'m ' + this.age + ' years old';
    }
};