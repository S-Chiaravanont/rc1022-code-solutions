console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'player 1',
    hand: []
  },
  {
    name: 'player 2',
    hand: []
  },
  {
    name: 'player 3',
    hand: []
  },
  {
    name: 'player 4',
    hand: []
  }
];

var deckOfCards = [
  {
    rank: 'ace',
    suit: 'clubs'
  }, {
    rank: 'ace',
    suit: 'diamonds'
  }, {
    rank: 'ace',
    suit: 'hearts'
  }, {
    rank: 'ace',
    suit: 'spades'
  }, {
    rank: '2',
    suit: 'clubs'
  }, {
    rank: '2',
    suit: 'diamonds'
  }, {
    rank: '2',
    suit: 'hearts'
  }, {
    rank: '2',
    suit: 'spades'
  }, {
    rank: '3',
    suit: 'clubs'
  }, {
    rank: '3',
    suit: 'diamonds'
  }, {
    rank: '3',
    suit: 'hearts'
  }, {
    rank: '3',
    suit: 'spades'
  }, {
    rank: '4',
    suit: 'clubs'
  }, {
    rank: '4',
    suit: 'diamonds'
  }, {
    rank: '4',
    suit: 'hearts'
  }, {
    rank: '4',
    suit: 'spades'
  }, {
    rank: '5',
    suit: 'clubs'
  }, {
    rank: '5',
    suit: 'diamonds'
  }, {
    rank: '5',
    suit: 'hearts'
  }, {
    rank: '5',
    suit: 'spades'
  }, {
    rank: '6',
    suit: 'clubs'
  }, {
    rank: '6',
    suit: 'diamonds'
  }, {
    rank: '6',
    suit: 'hearts'
  }, {
    rank: '6',
    suit: 'spades'
  }, {
    rank: '7',
    suit: 'clubs'
  }, {
    rank: '7',
    suit: 'diamonds'
  }, {
    rank: '7',
    suit: 'hearts'
  }, {
    rank: '7',
    suit: 'spades'
  }, {
    rank: '8',
    suit: 'clubs'
  }, {
    rank: '8',
    suit: 'diamonds'
  }, {
    rank: '8',
    suit: 'hearts'
  }, {
    rank: '8',
    suit: 'spades'
  }, {
    rank: '9',
    suit: 'clubs'
  }, {
    rank: '9',
    suit: 'diamonds'
  }, {
    rank: '9',
    suit: 'hearts'
  }, {
    rank: '9',
    suit: 'spades'
  }, {
    rank: '10',
    suit: 'clubs'
  }, {
    rank: '10',
    suit: 'diamonds'
  }, {
    rank: '10',
    suit: 'hearts'
  }, {
    rank: '10',
    suit: 'spades'
  }, {
    rank: 'jack',
    suit: 'clubs'
  }, {
    rank: 'jack',
    suit: 'diamonds'
  }, {
    rank: 'jack',
    suit: 'hearts'
  }, {
    rank: 'jack',
    suit: 'spades'
  }, {
    rank: 'queen',
    suit: 'clubs'
  }, {
    rank: 'queen',
    suit: 'diamonds'
  }, {
    rank: 'queen',
    suit: 'hearts'
  }, {
    rank: 'queen',
    suit: 'spades'
  }, {
    rank: 'king',
    suit: 'clubs'
  }, {
    rank: 'king',
    suit: 'diamonds'
  }, {
    rank: 'king',
    suit: 'hearts'
  }, {
    rank: 'king',
    suit: 'spades'
  }
];

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
  var playerJSON = JSON.stringify(player);
  var newPlayers = JSON.parse(playerJSON);
  return newPlayers;
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
