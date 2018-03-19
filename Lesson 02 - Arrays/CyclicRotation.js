function solution(A, K){
    if (A.length !== 0){
        let i=0, l;
        while (i<K) {
            l = A.pop();
            A.unshift(l);
            i++;
        }
    }
    return A;
}