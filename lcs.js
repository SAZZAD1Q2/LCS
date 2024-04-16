const args = process.argv.slice(2).join(" "); // Join all arguments into a single string
if (!args.trim()) {
  console.log("\n");
} else {
  const shortest = args; // The entire string will be treated as a single argument
  let longestCommonSubstring = "";
  for (let i = 0; i < shortest.length; i++) {
    for (let j = i + 1; j <= shortest.length; j++) {
      const substring = shortest.substring(i, j);
      let isCommon = true;
      for (const arg of args.split(" ")) {
        if (!arg.includes(substring)) {
          isCommon = false;
          break;
        }
      }
      if (isCommon && substring.length > longestCommonSubstring.length) {
        longestCommonSubstring = substring;
      }
    }
  }
  console.log(longestCommonSubstring !== "" ? longestCommonSubstring : "\n");
}
