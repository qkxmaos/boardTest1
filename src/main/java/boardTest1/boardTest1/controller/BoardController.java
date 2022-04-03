package boardTest1.boardTest1.controller;

import boardTest1.boardTest1.entity.Board;
import boardTest1.boardTest1.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {
    @Autowired
    private BoardService boardService;

    @GetMapping("/board/new")
    public boolean boardWriteForm(){
        return true;
    }

    @PostMapping("/board/new")
    public String boardWritePro(Board board){
        System.out.println(board.getTitle());
        System.out.println(board.getContent());
        boardService.write(board);
        System.out.println(board);

        return "/board/new";
    }

    @GetMapping("/board")
    public String  boardList(){
        System.out.println("board");
        return "board";
    }
}
