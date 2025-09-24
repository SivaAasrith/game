package com.gamingportal.gamingportal.config;

import com.gamingportal.gamingportal.model.Game;
import com.gamingportal.gamingportal.repository.GameRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedGames(GameRepository repo) {
        return args -> {
            if (repo.count() > 0) return;
            repo.save(new Game(
                    "Valorant",
                    "FPS",
                    "Tactical 5v5 shooter with agents and abilities.",
                    "https://images.unsplash.com/photo-1605649487212-47bdab064df3?q=80&w=1200&auto=format&fit=crop",
                    4.6,
                    0
            ));
            repo.save(new Game(
                    "League of Legends",
                    "MOBA",
                    "Team-based strategy game with 140+ champions.",
                    "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop",
                    4.5,
                    0
            ));
            repo.save(new Game(
                    "FIFA 24",
                    "Sports",
                    "Next-gen football simulation with ultimate team.",
                    "https://images.unsplash.com/photo-1551524164-99bf9713e31e?q=80&w=1200&auto=format&fit=crop",
                    4.2,
                    59.99
            ));
            repo.save(new Game(
                    "Elden Ring",
                    "Action RPG",
                    "Vast open world adventure by FromSoftware.",
                    "https://images.unsplash.com/photo-1606117331085-5760e3b58520?q=80&w=1200&auto=format&fit=crop",
                    4.9,
                    49.99
            ));
        };
    }
}


