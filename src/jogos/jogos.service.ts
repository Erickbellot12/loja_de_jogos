import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { jogo } from './entities/jogo.entity';

@Injectable()
export class JogosService {

  findAll() {
    this.Jogos
  }

  private Jogos: jogo [] = [];
  create(createJogoDto: CreateJogoDto){
  const atualIdMax = this.Jogos[this.Jogos.length - 1]?.id || 0
  const id = atualIdMax + 1;
  const jogo = {
    id,
    ...createJogoDto
  }
  this.Jogos.push(jogo);
  return jogo;
  }
  


  findOne(id: number) {
    const index = this.Jogos.findIndex((jogos) => jogos.id === id);
    return this.Jogos[index]
  }

  update(id: number, updateJogoDto: UpdateJogoDto) {
    const jogo = this.findOne(id);
    const novoJogo = {
      ...jogo,
      ...updateJogoDto,
    }
    const index = this.Jogos.findIndex(jogo => jogo.id === id);
    this.Jogos[index] = novoJogo;
    return novoJogo;
  }

  remove(id: number) {
    const index = this.Jogos.findIndex(jogo => jogo.id === id);
    if (index == -1) {
      throw new NotFoundException("jogo não encontrado") 
  }
  this.Jogos.splice(index,1);
  }
}
