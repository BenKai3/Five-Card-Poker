var faces = ["ace","king","queen","jack"];
var suits = ["hearts","diamonds","clubs","spades"];
var deck = [];
var player_hand = [];
var dealer_hand = [];

function new_deck(deck){
	while (deck.length > 0) {
		deck.pop();
	}
	for (var i = 2; i < 11; i++) {
	deck.push(i.toString()+"-spades",i.toString()+"-clubs",i.toString()+"-diamonds",i.toString()+"-hearts");
	};
	for (var i = 0; i < faces.length; i++) {
		deck.push(faces[i]+"-spades",faces[i]+"-clubs",faces[i]+"-diamonds",faces[i]+"-hearts");
	};
};
function random_card() {
 return Math.floor((Math.random() * deck.length));
};
function pull_card(deck){
	var card = random_card();
	var pulled_card = deck[card];
	deck.splice(card,1)
	return pulled_card;
};
function deal(deck,pull_card,new_deck) {
	new_deck(deck);
	for (var i = 0; i < 6; i++) {
		player_hand.push(pull_card(deck));
		dealer_hand.push(pull_card(deck));
	};

}


window.onload = function () {
	deal(deck,pull_card,new_deck);

}