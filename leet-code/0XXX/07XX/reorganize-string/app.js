const reorganizeString = (s) => {
    rearrangements = []
    const permutations = (pre, rem) => {
        if (rem.length === 0) {
            for (let i = 0; i < pre.length; i++) {
                if (pre[i] === pre[i+1]) {
                    i++
                    return
                }
            }
            rearrangements.push(pre)
            return
        }

        let newSet = new Set()
    
        for (let i = 0; i < rem.length; i++) {
            if (newSet.has(rem[i])) continue
            newSet.add(rem[i])
            permutations(pre + rem[i], rem.slice(0,i) + rem.slice(i+1))
        }


    }
    
    
    permutations("", s)
    let val = rearrangements.pop()
    if (!val) {
        return ""
    } else {
        return val 
    }
};

console.log(reorganizeString("kkkkzrkatkwpkkkktrq"))