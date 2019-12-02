'use strict';
 
angular.module('MGL_Task1_app').controller('MGL_Task1_Controller', ['$http','MGL_Task1_Service', 
	function($http,MGL_Task1_Service) {
    var self = this;
    self.game={game_id:null,game_name:'',game_genre:''};
    self.games=[];
    
    self.submit = submit;
    
    fetchAllGames();
    
    function fetchAllGames(){
    	MGL_Task1_Service.fetchAllGames()
    					 .then(
    							 function(allGames){
    								 self.games = allGames.data;
    							 }
    					 );
    }
    
    function addGame(game){
    	MGL_Task1_Service.createGame(game);
    	fetchAllGames();
    }
    
    function submit() {
    	addGame(self.game);
    }

}]);
