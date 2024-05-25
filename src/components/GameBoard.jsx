const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null] 
];

const GameBoard = () => {
    return (
        <ol id="game-board">
            { initialGameBoard.map((element, index) => (
                <li key={index}>
                    <ol>
                        {element.map((ele, ind) => (
                            <li key={ind}> 
                                <button>{ele}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

export default GameBoard;
