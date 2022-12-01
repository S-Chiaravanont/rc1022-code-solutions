console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
Requirement:
- need to random (0-51) for cards
- push that index into an array (cardsInPlay) to keep track of which card is taken out from the deck
- check if the next card (index) dealing out is already in the array (cardsInPlay) -> yes random another index
- assign cards (depending out # of cards per hand from input) to each player
- have a function that check what rank of card it is then return numeric value back
- check whose hand is the highest
- figure out if there's a tie -> if not return winner
- tiebreaker between tied players(potentially more than 2 hands)
- return ultimate winner
*/

var players = [];

var deckOfCards = [];
var cardFaces = ['clubs', 'diamonds', 'hearts', 'spades'];
for (var i = 1; i < 14; i++) {
  for (var j = 0; j < cardFaces.length; j++) {
    var newCard = {};
    if (i === 1) {
      newCard.rank = 'ace';
    } else if (i === 11) {
      newCard.rank = 'jack';
    } else if (i === 12) {
      newCard.rank = 'queen';
    } else if (i === 13) {
      newCard.rank = 'king';
    } else {
      newCard.rank = String(i);
    }
    newCard.suit = cardFaces[j];
    deckOfCards.push(newCard);
  }
}

function rankCard(card) {
  if (Number(card.rank)) {
    return Number(card.rank);
  } else {
    if (card.rank === 'ace') {
      return 11;
    } else {
      return 10;
    }
  }
}

function randomCard() {
  return Math.ceil(Math.random() * 51);
}

// can use Lodash check method to separate cards per hands and loop to assign to player[#].hand
function assignCardsToPlayers(player, cards, hand) {
  var playerCounter = 0;
  var currentAmoutOfCardInHand = 0;
  for (var i = 0; i < cards.length; i++) {
    if (currentAmoutOfCardInHand < hand) {
      player[playerCounter].hand.push(deckOfCards[cards[i]]);
      currentAmoutOfCardInHand++;
    } else {
      currentAmoutOfCardInHand = 1;
      playerCounter++;
      player[playerCounter].hand.push(deckOfCards[cards[i]]);
    }
  }
  return player;
}

function totalPoint(player) {
  var pointsArray = [];
  for (var j = 0; j < player.length; j++) {
    var totalPoint = 0;
    for (var i = 0; i < 2; i++) {
      totalPoint += rankCard(player[j].hand[i]);
    }
    pointsArray.push(totalPoint);
    player[j].totalPoint = totalPoint;
  }
  return pointsArray;
}

function hasMultipleWinners(points) {
  var highestPoint = _.max(points);
  var winnerIndexArray = [];
  for (var i = 0; i < points.length; i++) {
    if (highestPoint === points[i]) {
      winnerIndexArray.push(i);
    }
  }
  return winnerIndexArray;
}

function makePlayerObjCopy(player) {
  var players = [];
  for (var i = 1; i < 5; i++) {
    var newPlayer = {};
    newPlayer.name = 'player ' + i;
    newPlayer.hand = [];
    players.push(newPlayer);
  }
  return players;
}

function highHandGame(player, hand) {
  var playersInGame = makePlayerObjCopy(player);
  var totalCardsInPlay = hand * 4;
  var cardsInPlayIndexes = [];
  // get cards for each player
  while (cardsInPlayIndexes.length < totalCardsInPlay) {
    var newCardIndex = randomCard();
    if (!cardsInPlayIndexes.includes(newCardIndex)) {
      cardsInPlayIndexes.push(newCardIndex);
    }
  }
  // assign cards to each player
  var dealedPlayers = assignCardsToPlayers(playersInGame, cardsInPlayIndexes, hand);
  var pointsArray = totalPoint(dealedPlayers);
  var winners = hasMultipleWinners(pointsArray);
  // find winner index
  if (winners.length === 1) {
    return 'Winner is ' + dealedPlayers[winners[0]].name;
  } else {
    var tiedWinners = 'Joint winners are: ';
    for (var p = 0; p < winners.length; p++) {
      if (p === winners.length - 1) {
        tiedWinners += dealedPlayers[winners[p]].name;
      } else {
        tiedWinners += dealedPlayers[winners[p]].name + ' and ';
      }
    }
    return tiedWinners;
  }
}

highHandGame(players, 2);
