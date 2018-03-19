function solution(N) {
    const binary = parseInt(N,10).toString(2),
        regex = /(?!1)(0+)(?=1)/g; 
        
    const match = binary.match(regex);

    return match ? match.reduce((carry, current) => {
        return carry.length > current.length ? carry : current;
    }).length : 0;
}