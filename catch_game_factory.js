var catchGamePrototype = {
  setupApproach:function(){
    if(this.currentApproach){return false;}
    this.currentApproach = this.approachFactory.createApproach( { catcher: this.nextCatcher(), farm: this.farm } );
  },
  nextCatcher:function(){
    var index = this.numberOfCompletedApproachs % this.catchers.length;
    return this.catchers[index];
  },
  clearApproach:function(){
    this.currentApproach = null;
    this.numberOfCompletedApproachs++;
  }
}

var catchGameFactory = {
  createGame: function(options){
    var options = options || {}
    var catchGame = Object.create(catchGamePrototype);
    catchGame.currentApproach = null;
    catchGame.catchers = options.catchers || [];
    catchGame.farm = options.farm;
    catchGame.approachFactory= options.approachFactory;
    catchGame.numberOfCompletedApproachs = 0;
    return catchGame;
  }
}


module.exports = catchGameFactory;
