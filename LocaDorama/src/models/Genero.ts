import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Genero")
export class Genero {
  @PrimaryGeneratedColumn({ name: "idGenero" })
  idGenero!: number;

  @Column({ type: "varchar", length: 45, nullable: false })
  nome!: string;

  constructor(nome: string, idGenero?: number) {
    if (idGenero) {
      this.idGenero = idGenero;
    }
    this.nome = nome;
  }
}