const axios = require('axios');

const query = `
  query {
    transAT37(IDENTIFICACION_DEL_CLIENTE1641: '75249518') {
      TIPO_DE_CLIENTE_TRANSFEREN1640,
      NOMBRE_DEL_CLIENTE_TRANSFE1642,
      CODIGO_CUENTA_CLIENTE_AT37,
      NOMBRE_DEL_CLIENTE_TRANSFE1642
    }
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