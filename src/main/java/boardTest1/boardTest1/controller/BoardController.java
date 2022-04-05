package boardTest1.boardTest1.controller;

import boardTest1.boardTest1.entity.Board;
import boardTest1.boardTest1.service.BoardService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
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
    public String  boardList() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        System.out.println(mapper.writeValueAsString(boardService.boardList()));
        return mapper.writeValueAsString(boardService.boardList());
    }
}
