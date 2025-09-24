package com.gamingportal.gamingportal.repository;

import com.gamingportal.gamingportal.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}


