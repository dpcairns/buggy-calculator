import { add } from '../mathUtils.js';

const test = QUnit.test;

test('it should take in 5 and 6 and return 11', function(expect) {
    //Arrange
    // Set up your arguments and expectations
    const numberOne = 5;
    const numberTwo = 6;
    const expected = 11;

    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(numberOne, numberTwo);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(sum, expected);
});


test('it should take in 5 and -6 and return -1', function(expect) {
    //Arrange
    // Set up your arguments and expectations
    const numberOne = 5;
    const numberTwo = -6;
    const expected = -1;

    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(numberOne, numberTwo);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(sum, expected);
});



test('it should take in 3 and 1 and return 4', function(expect) {
    //Arrange
    // Set up your arguments and expectations
    const numberOne = 3;
    const numberTwo = 1;
    const expected = 4;

    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(numberOne, numberTwo);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(sum, expected);
});



test('it should take in 0 and 0 and return 0', function(expect) {
    //Arrange
    // Set up your arguments and expectations
    const numberOne = 0;
    const numberTwo = 0;
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(numberOne, numberTwo);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(sum, expected);
});



test('it should take in "hello" and "world" and return NaN', function(expect) {
    //Arrange
    // Set up your arguments and expectations
    const numberOne = 'hello';
    const numberTwo = 'world';
    const expected = 'hello';

    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(numberOne, numberTwo);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(sum, expected);
});
