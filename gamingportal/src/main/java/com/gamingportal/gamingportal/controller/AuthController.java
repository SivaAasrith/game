package com.gamingportal.gamingportal.controller;

import com.gamingportal.gamingportal.model.User;
import com.gamingportal.gamingportal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // React frontend
public class AuthController {

    @Autowired
    private UserService userService;

    // ✅ Signup API
    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return userService.registerUser(user);
    }

    // ✅ Login API
    @PostMapping("/login")
    public User login(@RequestBody User loginRequest) {
        return userService.loginUser(loginRequest.getEmail(), loginRequest.getPassword());
    }
}
