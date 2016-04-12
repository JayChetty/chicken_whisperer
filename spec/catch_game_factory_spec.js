var catchGameFactory = require('../catch_game_factory');

describe("CatchGameFactory", function(){
  it("should create games with no starting appraoch", function(){
    var catchGame = catchGameFactory.createGame();
    expect(catchGame.currentApproach).toBe(null);
  });
  it('should state the give the next catcher', function(){
    var catchGame =  catchGameFactory.createGame({catchers:[1,2,3,4]});
    expect(catchGame.nextCatcher()).toBe(1);
  });
  it("should ask approach factory for new approach", function(){
    var mockApproachFactory = { createApproach: function(){}}
    spyOn(mockApproachFactory, 'createApproach')
    var catchGame = catchGameFactory.createGame({ approachFactory: mockApproachFactory });
    catchGame.setupApproach();
    expect(mockApproachFactory.createApproach).toHaveBeenCalled();
  });
  it('should be able to clear the current approach', function(){
      var mockApproachFactory = { createApproach: function(){ return {name: "stubAppraoch"} }}
      var catchGame = catchGameFactory.createGame({ approachFactory: mockApproachFactory });
      catchGame.setupApproach();
      catchGame.clearApproach();
      expect(catchGame.currentApproach).toBe(null);
    })
  it("should set the approach to what factory returns", function(){
    var mockApproachFactory = { createApproach: function(){ return {name: "stubAppraoch"} }}
    var catchGame = catchGameFactory.createGame({ approachFactory: mockApproachFactory });
    catchGame.setupApproach();
    expect(catchGame.currentApproach).toEqual({name: "stubAppraoch"});
  });
  it('should be able to clear the current approach', function(){
    var mockApproachFactory = { createApproach: function(){ return {name: "stubAppraoch"} }}
    var catchGame = catchGameFactory.createGame({ approachFactory: mockApproachFactory });
    catchGame.setupApproach();
    catchGame.clearApproach();
    expect(catchGame.currentApproach).toBe(null);
  });
  it('should update the completed approach count when cleared', function(){
    var mockApproachFactory = { createApproach: function(){ return {name: "stubAppraoch"} }}
    var catchGame = catchGameFactory.createGame({ approachFactory: mockApproachFactory });
    catchGame.setupApproach();
    catchGame.clearApproach();
    expect(catchGame.numberOfCompletedApproachs).toBe(1);
  })
});
