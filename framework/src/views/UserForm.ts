import { eventNames } from "process";

export class UserForm {

    constructor(public parent: Element) { }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:Button': this.onButtonClick,
            'mouseenter:h1': this.onHeaderHover
        }
    }

    onHeaderHover(): void {
        console.log('H1 was hover over')
    }

    onButtonClick(): void {
        console.log('hi there!');
    }

    template(): string {
        return `
           <div>
                <h1>User Form</h1>
                <input/>
                <button>Click Me!</button>
           </div> 
        `;
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventsKey in eventsMap) {
            const [eventName, selector] = eventsKey.split(':');

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventsKey]);
            })
        }
    }

    render(): void {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content)
    }
}