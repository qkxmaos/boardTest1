package boardTest1.boardTest1.controller;

import boardTest1.boardTest1.entity.Board;
import boardTest1.boardTest1.service.BoardService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {
    @Autowired
    private BoardService boardService;

    @GetMapping("/board/new")
    public boolean boardWriteForm() {
        System.out.println("Get/board/new");
        return true;
    }

    @PostMapping("/board/new")
    public String boardWritePro(Board board) {
        System.out.println("Post/board/new");
        boardService.write(board);

        return "/board/new";
    }

    @GetMapping("/board")
    public String boardList() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        System.out.println("Get/board");
        return mapper.writeValueAsString(boardService.boardList());
    }

    @GetMapping("/board/{id}")
    public String boardView(@PathVariable("id") Integer id) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        System.out.println("/Get/board/"+id);
        return mapper.writeValueAsString(boardService.boardView(id));
    }

    @PostMapping("/board/delete")
    public String boardDelete(Integer id) {
        System.out.println("Post/board/delete"+id);
        boardService.boardDelete(id);

        return "delete";
    }

    @GetMapping("/board/modify/{id}")
    public String boardModifyForm(@PathVariable("id") Integer id) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        System.out.println("Get/board/modify/"+id);
        return mapper.writeValueAsString(boardService.boardView(id));
    }

    @PostMapping("/board/modify/{id}")
    public String boardModifyProcess(@PathVariable("id")Integer id, Board board) {

        System.out.println("Post/board/modify/"+id);
        Board boardTemp = boardService.boardView(id);
        boardTemp.setTitle(board.getTitle());
        boardTemp.setContent(board.getContent());
        System.out.println(board.getTitle());
        System.out.println(board.getContent());

        boardService.write(boardTemp);

        return "ModifyProcess";
    }
}
