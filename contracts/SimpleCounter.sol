pragma solidity ^0.4.24;

contract SimpleCounter {
    int256 public counter = 0;
    
    event counterChange(int256 counter);

    function increment() public {
        counter++;
        emit counterChange(counter);
    }

    function decrement() public {
        counter--;
        emit counterChange(counter);
    }

    function getCounter() public view returns (int256) {
        return counter;
    }
}