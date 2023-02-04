import mongoose, { model, Schema } from "mongoose";
import Professional from "@src/models/professionalSchema";
import "dotenv/config";

describe("Professional Model", () => {
  beforeEach(async () => {
    const connectionString = process.env.URL_BASE_MONGO
      ? process.env.URL_BASE_MONGO
      : "";
    await mongoose.connect(connectionString);
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

  it("should create a new professional", async () => {
    const professionalData = {
      name: "Lucas mortola da cunha",
      cpf: "12345678910",
      cep: "12345678",
      city: "São Paulo",
      uf: "SP",
      address: "Rua teste",
      district: "Bairro teste",
      number: 123,
      complement: "Complemento teste",
      telFone: "123456789",
      cellFone: "123456789",
      email: "email@teste.com",
      birthDate: new Date(),
      typeFunction: "Médico",
      obs: "Observação teste",
    };

    const professional = new Professional(professionalData);
    const savedProfessional = await professional.save();

    expect(savedProfessional._id).toBeDefined();
    expect(savedProfessional.name).toBe(professionalData.name);
  });

  it("should delete a professional", async () => {
    const professionalData = {
      name: "Lucas mortola da cunha",
      cpf: "12345678910",
      cep: "12345678",
      city: "São Paulo",
      uf: "SP",
      address: "Rua teste",
      district: "Bairro teste",
      number: 123,
      complement: "Complemento teste",
      telFone: "123456789",
      cellFone: "123456789",
      email: "",
      birthDate: new Date(),
      typeFunction: "Médico",
      obs: "Observação teste",
    };

    const professional = new Professional(professionalData);
    const savedProfessional = await professional.save();
    const deletedProfessional = await Professional.findByIdAndDelete(
      savedProfessional._id
    );

    if (!deletedProfessional) throw Error("Professional not found");
    expect(deletedProfessional._id).toBeDefined();
  });

  it("should update a professional", async () => {
    const professionalData = {
      name: "Lucas mortola da cunha",
      cpf: "12345678910",
      cep: "12345678",
      city: "São Paulo",
      uf: "SP",
      address: "Rua teste",
      district: "Bairro teste",
      number: 123,
      complement: "Complemento teste",
      telFone: "123456789",
      cellFone: "123456789",
      email: "",
      birthDate: new Date(),
      typeFunction: "Médico",
      obs: "Observação teste",
    };

    const professional = new Professional(professionalData);
    const savedProfessional = await professional.save();
    const updatedProfessional = await Professional.findByIdAndUpdate(
      savedProfessional._id,
      { name: "Lucas mortola da cunha updated" },
      { new: true }
    );

    if (!updatedProfessional) throw Error("Professional not found");
    expect(updatedProfessional.name).toBe("Lucas mortola da cunha updated");
  });
});
