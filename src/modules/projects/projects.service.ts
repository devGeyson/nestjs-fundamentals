import { Injectable } from '@nestjs/common'
import { ProjectRequestDTO } from './projetcs.dto.js'

@Injectable()
export class ProjectsService {
  findAll() {}

  findById(id: string) {}

  create(data: ProjectRequestDTO) {}

  update(id: string, data: ProjectRequestDTO) {}

  remove(id: string) {}
}
