
const Tiles = document.querySelectorAll('#tile');
const gameConfig = document.getElementById('tllr-par');
const gameConfig_span = document.getElementById('UserPawntllr');
const WinTellerBanner = document.getElementById('wintllr');
const WinTellerBanner_span = document.getElementById('wintllr-span');
const resetBtn = document.getElementById('resetBtn');

let currentPlayer = 'X';
let isgameActive = true;
let gameBoard = ['', '', '', '', '', '', '', '', ''];

let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


const main = () => {

        gameConfigBanner();

    Tiles.forEach((Tile, indexBoard) => {
        Tile.addEventListener('click', (e) => {

            let ClickedBtn = e.target;

            if (isgameActive) {
                if (ClickedBtn.textContent === '') {
                    createUserPawn(ClickedBtn);
                    gameBoard[indexBoard] = currentPlayer;
                    Final_Win_or_Draw();
                    swapPlayerPawn();
                    gameConfigBanner();
                }
            }

        });
    })
}

const createUserPawn = (ClickedButtonParam) => {
    let UserChar = document.createElement('span');

    UserChar.classList.add(currentPlayer == 'X' ? 'player_x' : 'player_o');
    UserChar.innerText = currentPlayer === 'X' ? 'X' : 'O';
    ClickedButtonParam.appendChild(UserChar);
}

const swapPlayerPawn = () => {
    return currentPlayer == 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
}

const checPawnkWin = () => {
    for (const combination of winConditions) {
        let [a, b, c] = combination;

        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }
    return null;
}

const checPawnDraw = () => {
    if (gameBoard.every( Tile => Tile != '')) {
        isgameActive = false;

        WinTellerBanner.innerHTML = `It's a Draw!`;
        gameConfig.style.display = 'none';
        WinTellerBanner.style.display = 'flex';
        resetBtn.style.display = 'block';
    }
}

const Final_Win_or_Draw = () => {
    const winner = checPawnkWin();

    if (winner) {
        isgameActive = false;
        if (currentPlayer == 'X') {
            WinTellerBanner_span.innerText = 'X';
            WinTellerBanner_span.style.color = 'var(--x-Pawn-color)';
            WinTellerBanner.style.display = 'flex';
            resetBtn.style.display = 'block';
        }
        else if (currentPlayer == 'O') {
            WinTellerBanner_span.innerText = 'O'
            WinTellerBanner_span.style.color = 'var(--o-Pawn-color)';
            WinTellerBanner.style.display = 'flex';
            resetBtn.style.display = 'block';
              // <----------------- 
        }
        gameConfig.style.display = 'none';

        return;
    }
    checPawnDraw();
}

const gameConfigBanner = () => {
    if (currentPlayer == 'X') {
        gameConfig_span.innerText = 'X';
    }
    else{
        gameConfig_span.innerText = 'O';
    }

    switch (gameConfig_span.innerText) {
        case 'X':
            gameConfig_span.style.color = 'var(--x-Pawn-color)';
            break;
        case 'O':
            gameConfig_span.style.color = 'var(--o-Pawn-color)';
            break;
    
        default:
            return;
            break;
    }
}

resetBtn.addEventListener('click', () => {
    location.reload();
})

main();