export default async function handler(req, res) {
  //   const response = await fetch("https://api.example.com/random-message");
  //   const data = await response.json();
  const username = process.env.MY_USERNAE;
  const password = process.env.MY_PASSWORD;
  const customprop = process.env.customprop;
  const data = {
    message: `Hello World from the server with ${username}  and ${password} and custom prop ${customprop} `,
  };
  res.status(200).json(data);
}
