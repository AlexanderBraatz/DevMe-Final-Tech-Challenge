const initial = { 
  colours :['#FF6633', '#FF0000', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#00FF7F', '#FF007F', '#B34D4D',
    '#80B300', '#007FFF', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#33FFCC', '#E6331A',
  ],


  // stateHistory : [ {previousstate}, {previousstate}],
  
  //players have an id property to allow for reliable match making. If the index was used deleting a player during a match would shift the index of all following players, breaking the match making. 

  players:[
    // {
    //   id :4, 
    //   name : "Player 4",
    //   colour : "#FF6633", 
    //   champion : false,
    //   eddit : false,
    // },
    // {
    //   id :3, 
    //   name : "Player 3",
    //   colour : "#FF6633", 
    //   champion : false,
    //   eddit : false,
    // },
    // {
    //   id :2, 
    //   name : "Player 2",
    //   colour : "#FF6633", 
    //   champion : true,
    //   eddit : false,
    // },
    // {
    //   id :1, 
    //   name : "Player 1",
    //   colour : "#FF6633", 
    //   champion : false,
    //   eddit : false,
    // },
    
  ],

matches:[],
participants : [] ,
waiting:[],
allowPlayerDeletion : true,


startView : true,
sideBarView : false,
matchView : false,
endView : false,

numberOfAddedPlayers : 0,
roundCounter : 1,
matchPointer : 0, 
};

export default initial;