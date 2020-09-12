function kmp(source, pattern) {
  // 计算 table
  let table = new Array(pattern.length).fill(0)

  {
    let i = 1, j = 0

    while(i < pattern.length) {
      if (pattern[i] === pattern[j]) {
        ++i
        ++j
        table[i] = j
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          ++i
        }
      }
    }
  }

  // 匹配
  {
    let i = 0, j = 0

    while(i <= source.length) {
      if (j === pattern.length) return i - pattern.length
      if (pattern[j] === source[i]) {
        ++i
        ++j
      } else {
        if (j > 0) {
          j = table[j]
        } else {
          ++i
        }
      }
    }

    return -1
  }
}

console.log(kmp('abceabcd', 'abcd'))