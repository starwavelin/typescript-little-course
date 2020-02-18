// Interfaces Extending Classes 

class Control implements SelectableControl{
    private state: any = 333;
    select() {
        console.log('Do nothing!');
    }
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {
        console.log('Button selected1!');
    }
}

class TextBox extends Control {
    select() { }
}

let btn: Button = new Button();
// btn.state 
btn.select();

let nth: Control = new Control();
nth.select();

