export function conculatePresent(base: number, number: number): number {
    let onePresent = base / 100
    let donePresent = number / onePresent
    return Math.floor(donePresent)
}