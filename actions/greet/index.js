//https://github.com/chrisbuttery/greeting/blob/master/greetings.json
const GREETINGS = [
  "'Allo",
  "'Allo 'Allo",
  "Aye oop",
  "Ay up",
  "Ahoy",
  "G'day",
  "Greetings",
  "Hello",
  "Hey there",
  "Hey",
  "Hi there",
  "Hi",
  "Hiya",
  "How are things",
  "How are ya",
  "How ya doin'",
  "How's it goin'",
  "How's it going",
  "How's life",
  "Howdy",
  "Sup",
  "What's new",
  "What's up",
  "Yo"
];

function main (params) {
  //https://css-tricks.com/snippets/javascript/select-random-item-array/
  var randomGreeting = GREETINGS[Math.floor(Math.random()*GREETINGS.length)];
  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json"
    },
    body: {
      "message": `${randomGreeting}, ${params.name}`
    }
  }
}

exports.main = main
