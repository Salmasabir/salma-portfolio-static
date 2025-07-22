const bcrypt = require('bcryptjs');

async function run() {
  const hashed = await bcrypt.hash("votreMotDePasse", 10);
  console.log(hashed);
}

run();