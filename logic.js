var faces = ["ace","king","queen","jack"];
var suits = ["hearts","diamonds","clubs","spades"];
var straights = ["ace","king","queen","jack","10","9","8","7","6","5","4","3","2"];
var deck = [];

var player_hand = [];
var player_hand_suits = [];
var player_hand_numbers = [];
var player_hand_sets = [];
var player_hand_sets_evaluation = {};

var dealer_hand = [];
var dealer_hand_suits = [];
var dealer_hand_numbers = [];
var dealer_hand_sets = [];
var dealer_hand_sets_evaluation = {};

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
function evaluate(hand,suits,numbers,set_evaluation,sets) {
	while (suits.length > 0){

	}
	while (numbers.length > 0){
		
	}
	for (var i = 0; i < hand.length; i++) {

		var temp = hand[i].split("-");
		numbers.push(temp[0]);
		suits.push(temp[1]);
	};
	for (var i = 0; i < numbers.length; i++) {
		if (set_evaluation[numbers[i]] == undefined) {
			set_evaluation[numbers[i]] = 1;
		}
		else {
			set_evaluation[numbers[i]]++;
		};
	};
	for (number in set_evaluation) {
		if (eval(number) > 1) {
			sets.push("You have "+set_evaluation[number]+" "+number+"'s");
		};
	}
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
	document.getElementById('evaluate').onclick = function () {
		evaluate(player_hand,player_hand_suits,player_hand_numbers,player_hand_sets_evaluation,player_hand_sets);
		evaluate(dealer_hand,dealer_hand_suits,dealer_hand_numbers,dealer_hand_sets_evaluation,dealer_hand_sets);
	};	
}