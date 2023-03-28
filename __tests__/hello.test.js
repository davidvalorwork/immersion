const axios = require('axios');

const query = `
  query {
    hello
  }
`;

const helloFunction = async () => {
  try {
    const response = await axios.post('http://localhost:4000', { query })
    console.log(response.data);
    return true
  } catch (error) {
    console.error(error);
    return false
  }
}

test('Prueba asincrónica', async () => {
  const resultado = await helloFunction(); // Llamada a una función que devuelve una promesa
  expect(resultado).toBe(true); // Prueba que el resultado es el esperado
});