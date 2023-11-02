export const validateFieldLengthThree = x => {
    if (x.length >= 3 && x.trim() ) {
        return true
    }
    return false
}

export const validateFieldLengthSix = x => {
    if (x.length >= 6 && x.trim()) {
        return true
    }
    return false
}