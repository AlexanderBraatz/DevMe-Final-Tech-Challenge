const initial = { 
  colours :['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',],

  nuberOFPlayers : 4,
  roundCounter : 1,
  // stateHistory : [ {previousstate}, {previousstate}],

  players:[
    {
      id :1, 
      name : "otto",
      colour : "yellow", 
      champion : false,
    },
    {
      id :1, 
      name : "mario",
      colour : "red", 
      champion : false,
    },
    {
      id :1, 
      name : "luigy",
      colour : "green", 
      champion : false,
    },
  ],

  matches:[
    {
      playing : [ 0, 1],
      complete : false 
    },
    {
      playing : [ 2, 3],
      complete : false 
    },
  ],


welcomeView : true,
sideBarView : false,
matchView : true,
resultsView : false,

roundComplete : false,
tournamentComplete : false,
};

export default initial;