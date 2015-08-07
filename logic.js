var faces = ["ace","king","queen","jack"];
var suits = ["hearts","diamonds","clubs","spades"];
var deck = [];
var player_hand = [];
var dealer_hand = [];

function new_deck(){
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
function pull_card(){
	var card = random_card();
	var pulled_card = deck[card];
	deck.splice(card,1)
	return pulled_card;
};
function deal() {
	while (player_hand.length > 0){
		player_hand.pop();
	}
	while (dealer_hand.length > 0){
		dealer_hand.pop();
	}
	new_deck();
	for (var i = 0; i < 5; i++) {
		player_hand.push(pull_card());
		dealer_hand.push(pull_card());
	};

}
function toss_card(card) {
	for (var i = 0; i < player_hand.length; i++) {
		if (card == player_hand[i]) {
			player_hand.splice(i,1);
		}; 
	};
}
function show_player_hand() {
	for (var i = 0; i < player_hand.length; i++) {
		document.getElementById('card'+i.toString()).innerHTML = player_hand[i];
		document.getElementById('card'+i.toString()).onclick = function () {
			toss_card(this.innerHTML);
			this.innerHTML = "";
		};
	};
}
function show_dealer_hand() {
	document.getElementById('dealer_hand').innerHTML = dealer_hand;
}

window.onload = function () {
	deal();
	show_player_hand();
	show_dealer_hand();
	document.getElementById('new_cards').onclick = function () {
		while (player_hand.length < 5) {
			player_hand.push(pull_card());
		};
		show_player_hand();
	};
	document.getElementById('fold').onclick = function () {
		deal();
		show_player_hand();
		show_dealer_hand();
	};
}