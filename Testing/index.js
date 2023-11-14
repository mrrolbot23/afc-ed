const isPalindrome = (string) => {
    let reversed = ""
    if (typeof string !== "string") {
        return false
    } else {
        reversed = string.split(' ').reverse().join()
    }

    if (string === reversed) {
        return true
    }

    return false

}

isPalindrome("apple");

module.exports = {
    isPalindrome
}