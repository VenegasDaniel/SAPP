import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity({
    name: "contribution"
})
export class Contribution {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    employee_id: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date_contribution: Date;

    @Column()
    amount_afp: number;

    @Column()
    amount_isapre: number;

    @Column()
    amount_seguro_cesantia: number;

    @Column()
    amount_total: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

}