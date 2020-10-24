export function conculatePresent(base: number, number: number): number {
    let onePresent = Number(base) / 100
    let donePresent = Number(number) / onePresent
    return Math.floor(donePresent)
}