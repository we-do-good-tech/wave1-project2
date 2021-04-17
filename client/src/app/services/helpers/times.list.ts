export function timeList(min: number, max: number, steps: number): string[] {
    let list: string[] = []
    for (let i: number = min; i < max; i++) {
        for (let x: number = 0; x < 60; x++) {
            if (x % steps === 0) {
                let hours = i <= 9 ? '0' + i : i
                let minutes = x <= 9 ? '0' + x : x
                list.push(hours + ':' + minutes)
            }
        }
    }

    return list
}


