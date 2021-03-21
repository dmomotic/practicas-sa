const request = require("supertest");
const app = require("../app");

describe("Test client request", () => {
  test("It should response the POST method", () => {
    const data = {
      id: 1,
      restaurante: "Skillets",
      comida: "Stake house",
    };
    return request(app)
      .post("/api/cliente/solicitar-pedido")
      .send(data)
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test restaurant cheking request's state", () => {
  test("It should response the GET method", () => {
    const data = {
      id: 1,
      restaurante: "Skillets",
      comida: "Stake house",
    };
    return request(app)
      .get("/api/cliente/verificar-pedido-restaurante")
      .query({ id: 1 })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test deliver cheking request's state", () => {
  test("It should response the GET method", () => {
    const data = {
      id: 1,
      restaurante: "Skillets",
      comida: "Stake house",
    };
    return request(app)
      .get("/api/cliente/verificar-pedido-repartidor")
      .query({ id: 1 })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
