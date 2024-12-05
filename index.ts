const INPUT_FILE_PATH = "./input.txt";
const OUTPUT_FILE_PATH = "./output.txt";

const inputFile = Bun.file(INPUT_FILE_PATH);
const outputFile = Bun.file(OUTPUT_FILE_PATH);

async function main() {
  const text = await inputFile.text();
  const writer = outputFile.writer();

  writer.write("=== Decision Procedure Results ===\n\n");

  const lines = text.split("\n").filter((line) => line.trim());
  for (const line of lines) {
    const result = decisionProcedure(line);
    writer.write(`→ "${line}": ${result ? "✓" : "✗"}\n`);
  }

  writer.write(`\nProcessed ${lines.length} strings.\n`);

  writer.end();
}

function decisionProcedure(string: string): boolean {
  if (!string.includes("p") || !string.includes("q") || !string.includes("-")) {
    return false;
  }

  if (hasInvalidCharacters(string)) {
    return false;
  }

  if (!hasOnlyOneCharacter(string, "p") || !hasOnlyOneCharacter(string, "q")) {
    return false;
  }

  if (!verifyPositionsOfCharacters(string)) {
    return false;
  }

  if (!verifyNumberOfHyphens(string)) {
    return false;
  }

  return true;
}

function hasInvalidCharacters(string: string): boolean {
  const validCharacters = new Set(["p", "q", "-"]);
  return [...string].some((char) => !validCharacters.has(char));
}

function hasOnlyOneCharacter(string: string, character: string): boolean {
  return [...string].filter((char) => char === character).length === 1;
}

function verifyPositionsOfCharacters(string: string): boolean {
  const pIndex = string.indexOf("p");
  const qIndex = string.indexOf("q");

  if (pIndex > qIndex) {
    return false;
  }

  return true;
}

function verifyNumberOfHyphens(string: string): boolean {
  const betweenPAndQ = string.split("p")[1].split("q")[0].length;
  const afterQ = string.split("q")[1].length;
  const beforeP = string.split("p")[0].length;

  if (afterQ <= beforeP) {
    return false;
  }

  if (!(betweenPAndQ === 1 || betweenPAndQ === afterQ - 2)) {
    return false;
  }

  return true;
}

main();
