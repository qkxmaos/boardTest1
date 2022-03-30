package boardTest1.boardTest1.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello(){
        return "시간  " + new Date() + "\r\n";
    }
    @GetMapping("/api/hello1")
    public String hello1(){
        return "시간  " + new Date() + "\r\n";
    }
}
