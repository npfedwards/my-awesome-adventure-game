import * as readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function ask (question: string, acceptedAnswers: string[]|false = false): Promise<string> {
    const answer = await rl.question(question + (acceptedAnswers ? (' [' + acceptedAnswers.join('/') + ']') : ''));
    if (!acceptedAnswers || acceptedAnswers.find(a => a.toLowerCase().trim() === answer.toLowerCase().trim())) {
        return answer;
    } else {
        console.log('Sorry, that was not a valid response');
        return ask(question, acceptedAnswers);
    }
}

export function askClose (): void {
    rl.close();
}

export default {
    ask,
    askClose
}