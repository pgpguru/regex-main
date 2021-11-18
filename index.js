const email = ["bruh@bruh.com"];
const regex = new RegExp(/\b[a-z0-9#$_-]+@[a-z0-9]+\.[a-z]{2,3}\b/, 'i')

email.forEach(email => console.log(email, regex.test(email)));