import checkResults from '../checkResult.js';

const test = QUnit.test;

test('testing all 9 situations', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerPaper = 'paper';
    const playerRock = 'rock';
    const playerScissors = 'scissors';
    const compPaper = 'paper';
    const compRock = 'rock';
    const compScissors = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const result1 = checkResults(playerPaper, compPaper);
    const result2 = checkResults(playerPaper, compRock);
    const result3 = checkResults(playerPaper, compScissors);
    const result4 = checkResults(playerRock, compPaper);
    const result5 = checkResults(playerRock, compRock);
    const result6 = checkResults(playerRock, compScissors);
    const result7 = checkResults(playerScissors, compPaper);
    const result8 = checkResults(playerScissors, compRock);
    const result9 = checkResults(playerScissors, compScissors);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result1, 'draw');
    assert.equal(result2, 'win');
    assert.equal(result3, 'lose');
    assert.equal(result4, 'lose');
    assert.equal(result5, 'draw');
    assert.equal(result6, 'win');
    assert.equal(result7, 'win');
    assert.equal(result8, 'lose');
    assert.equal(result9, 'draw');

});

