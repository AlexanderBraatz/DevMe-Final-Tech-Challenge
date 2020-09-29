const initial = { 
  colours :['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',],

  numberOfAddedPlayers : 1,
  roundCounter : 1,
  // stateHistory : [ {previousstate}, {previousstate}],
  
  //players have an id property to allow for reliable match making. If the index was used deleting a player during a match would shift the index of all following players, breaking the match making. 

  players:[
    {
      id :1, 
      name : "Player 1",
      colour : "#FF6633", 
      champion : false,
      eddit : false,
    },
    {
      id :2, 
      name : "Player 2",
      colour : "#FF6633", 
      champion : false,
      eddit : false,
    },
    {
      id :3, 
      name : "Player 3",
      colour : "#FF6633", 
      champion : false,
      eddit : false,
    },
    {
      id :4, 
      name : "Player 4",
      colour : "#FF6633", 
      champion : false,
      eddit : false,
    },
    
  ],

  matches:[
    [ 1, 2],
    [ 3, 4],
  ],


startView : true,
sideBarView : false,
matchView : true,
resultsView : false,

matchPointer : 1, 
roundComplete : false,
tournamentComplete : false,
};

export default initial;