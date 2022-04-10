package boardTest1.boardTest1.service;

import boardTest1.boardTest1.entity.Board;
import boardTest1.boardTest1.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public void write(Board board){

        boardRepository.save(board);
    }

    public List<Board> boardList(){

        return boardRepository.findAll();
    }

    public Board boardView(Integer id) {

        return boardRepository.findById(id).get();
    }

    public void boardDelete(Integer id) {
        boardRepository.deleteById(id);
    }
}
