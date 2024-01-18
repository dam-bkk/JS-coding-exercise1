function largestSwap(num) {
	
    // I convert the number to a string
    const numberToString = num.toString();
    
    // I swap the digits and turn them back to a number
    const swapNumber = parseInt (numberToString[1] + numberToString [0]);
    
    // to compare the provided number with the swap
    return num >= swapNumber;
    
    };


const largestSwap = (num) > {
    const numberToString = num.toString();
    const swapNumber = parseInt (`${numberToString[1]} ${numberToString [0]}`);
    return num >= swapNumber;
}


