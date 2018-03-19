function solution(A) {
    var odd = 0;
    
    for(var i=0; i<A.length; i++) {
        odd ^= A[i];
    }
    
    return odd;
}