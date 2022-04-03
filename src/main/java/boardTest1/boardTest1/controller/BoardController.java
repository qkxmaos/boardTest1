package boardTest1.boardTest1.controller;

import boardTest1.boardTest1.entity.Board;
import boardTest1.boardTest1.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class BoardController {
    @Autowired
    private BoardService boardService;

    @GetMapping("/board/new")
    public String boardWriteForm(){
        return "true";
    }

    @PostMapping("/board/new")
    public String boardWritePro(Board board){
        boardService.write(board);

        return "";
    }

    @GetMapping("/board")
    public Model boardList(Model model){

        model.addAttribute("list", boardService.boardList());

        return model;
    }
}
