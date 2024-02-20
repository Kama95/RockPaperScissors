    <script>
        const buttons = document.querySelectorAll('button');
        const resultDisplay = document.getElementById('result');
        const scoreDisplay = document.getElementById('score');

        let playerScore = 0;
        let computerScore = 0;

        function computerPlay() {
            const options = ['Rock', 'Paper', 'Scissors'];
            const randomIndex = Math.floor(Math.random() * options.length);
            return options[randomIndex];
        }

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return 'It\'s a draw!';
            } else if (
                (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
                (playerSelection === 'Paper' && computerSelection === 'Rock') ||
                (playerSelection === 'Scissors' && computerSelection === 'Paper')
            ) {
                playerScore++;
                return 'You win this round!';
            } else {
                computerScore++;
                return 'You lose this round!';
            }
        }

        function updateScore() {
            scoreDisplay.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
        }

        function announceWinner() {
            if (playerScore === 5) {
                resultDisplay.textContent = 'Congratulations! You are the winner!';
            } else if (computerScore === 5) {
                resultDisplay.textContent = 'Computer wins! Better luck next time.';
            }
        }

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const playerSelection = this.textContent;
                const computerSelection = computerPlay();
                const roundResult = playRound(playerSelection, computerSelection);

                resultDisplay.textContent = roundResult;
                updateScore();
                announceWinner();
            });
        });
    </script>
</body>
</html>
