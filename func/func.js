var Deck = (function () {
    function Deck(suits, cards) {
        this.cardCount = 52;
        this.suits = suits;
        this.cards = cards;
    }
    Deck.prototype.createCardPicker = function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * _this.cardCount);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % _this.cardCount
            };
        };
    };
    return Deck;
}());
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
var cards = Array(52);
var deck = new Deck(suits, cards);
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
