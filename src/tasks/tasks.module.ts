import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './controllers/tasks/tasks.controller';
import { TaskSchema } from './schema/createTask';
import { TasksService } from './services/tasks/tasks.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
