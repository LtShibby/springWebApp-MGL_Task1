package com.MGL_Task1.service;

import java.util.List;
import com.MGL_Task1.model.Game;

public interface Game_Service {

	List<Game> retrieveAllGames();

	Game saveGame(Game game);

}
