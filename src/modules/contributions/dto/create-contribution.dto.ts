export class CreateContributionDto {
    id: string;
    employee_id: string;
    date_contribution: Date;
    amount_afp: number;
    amount_isapre: number;
    amount_seguro_cesantia: number;
    amount_total: number;
}
