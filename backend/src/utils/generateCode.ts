export default function generateCode(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  const currentYear = new Date().getFullYear().toString().slice(-2);
  const timestamp = Date.now().toString().slice(-5);
  const randomDigit = Math.floor(Math.random() * 10);

  return `${randomLetter}${currentYear}${timestamp}${randomDigit}`;
}
