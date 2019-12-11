interface Card {
    suit: string;
    card: number;
}
interface DeckObject {
    suits: Array<string>;
    cards: Array<number>;
    cardCount: number;
    createCardPicker(): (this: Deck) => Card;
}
class Deck implements DeckObject {
    readonly suits: Array<string>;
    readonly cards: Array<number>;
    readonly cardCount: number = 52;
    constructor (suits: Array<string>, cards: Array<number>) {
        this.suits = suits;
        this.cards = cards;
    }
    createCardPicker (this: DeckObject) {
        return () => {
            const pickedCard = Math.floor(Math.random() * this.cardCount);
            const pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % this.cardCount
            }
        }
    }
}
const suits: Array<string> = ['hearts', 'spades', 'clubs', 'diamonds'];
const cards: Array<number> = Array(52);
let deck = new Deck(suits, cards);
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);