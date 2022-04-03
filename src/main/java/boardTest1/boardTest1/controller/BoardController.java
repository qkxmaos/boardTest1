package boardTest1.boardTest1.controller;

import boardTest1.boardTest1.entity.Board;
import boardTest1.boardTest1.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
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
        System.out.println("Get:/board/new");
        return true;
    }

    @PostMapping("/board/new")
    public String boardWritePro(Board board){
        System.out.println("Post:/board/new");
        System.out.println(board.getTitle());
        System.out.println(board.getContent());
        boardService.write(board);

        return "/board/new";
    }

    @GetMapping("/board")
    public Model boardList(Model model){
        System.out.println("Get:/board");

        return model.addAttribute("list", boardService.boardList());


    }
}
