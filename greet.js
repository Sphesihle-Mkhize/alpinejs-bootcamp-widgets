function greetWidget() {
    return {
        name: '',
        language: 'english',
        message: '',
        greet() {
            const greetings = {
                english: `Hello, ${this.name}!`,
                spanish: `Hola, ${this.name}!`,
                french: `Bonjour, ${this.name}!`
            };
            this.message = greetings[this.language];
        }
    }
}