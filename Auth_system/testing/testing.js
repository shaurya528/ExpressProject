import  bcrypt from "bcrypt"

const password= "shaurya123";

const hashed=  await bcrypt.hash(password,10);
console.log(hashed)

const isMatched=await bcrypt.compare(password,hashed);
console.log(isMatched)
