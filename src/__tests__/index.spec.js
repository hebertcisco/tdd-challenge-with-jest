const { sum } = require("../sum");

describe("Teste de adição de números", () => {
    it("Deve retornar um número com a soma dos dois números informados", () => {
        const result = sum({ firstNumber: 1, secondNumber: 2 });
        expect(result).toBe(3);
    });
});
