import { CreateTaskDto } from './../../dtos/CreateTasks.dto';
import { TasksService } from './../../services/tasks/tasks.service';
import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getTasks() {
    return this.tasksService.findAll();
  }

  @Post()
  createTasks(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto);
    this.tasksService.createTask(createTaskDto);
    return {
      message: 'Success',
    };
  }

  @Patch(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return this.tasksService.updateTask(id, createTaskDto);
  }
}
