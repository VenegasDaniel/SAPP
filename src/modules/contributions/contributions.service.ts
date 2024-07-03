import { Injectable } from '@nestjs/common';
import { CreateContributionDto } from './dto/create-contribution.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contribution } from 'src/entities/contribution.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContributionsService {
  
  constructor(@InjectRepository(Contribution) private contributionRepository: Repository<Contribution>) {
    
  }

  async create(createContributionDto: CreateContributionDto) {
    const contribution = this.contributionRepository.create(createContributionDto);
    return await this.contributionRepository.save(contribution);
  }

  async findAll() {
    const contributions = await this.contributionRepository.find();
    return contributions;
  }

  async findOne(id: string) {
    try {
      const order = await this.contributionRepository.findOne({
        where: {
          id: id
        }
      });
      console.log('Orden encontrada:', order);
      return order;
    } catch (error) {
      console.error(error.message);
      throw new Error('Error al buscar la orden.');
    }
  }
  
}


