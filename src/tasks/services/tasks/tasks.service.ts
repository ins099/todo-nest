import { Task as TaskSchemaaa, TaskDocument } from './../../schema/createTask';
import { CreateTaskDto } from './../../dtos/CreateTasks.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from 'src/tasks/types/tasks';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<TaskDocument>) {}

  private taskList: Task[] = [
    {
      id: 1,
      title: 'Cook Food',
      reminder: "Monday, 5 O'Clock",
    },
    {
      id: 2,
      title: 'Eat Food',
      reminder: "Monday, 6 O'Clock",
    },
    {
      id: 3,
      title: 'Wash Dishes',
      reminder: "Monday, 7 O'Clock",
    },
    {
      id: 4,
      title: 'Order More Food',
      reminder: "Monday, 8 O'Clock",
    },
  ];

  getTask() {
    return this.taskList;
  }

  async createTask(taskDto: CreateTaskDto) {
    console.log('HERE', taskDto);
    const task = await new this.taskModel(taskDto);
    await task.save();
  }

  async findAll() {
    const tasks = await this.taskModel.find();
    // console.log(tasks);
    return tasks;
  }

  async updateTask(id: string, task: CreateTaskDto) {
    // this.taskModel.findByIdAndUpdate(id,)
    const updtTask = await this.taskModel
      .findByIdAndUpdate({ _id: id }, task, { new: true })
      .populate('title')
      .populate('reminder');
    if (!updtTask) {
      throw new NotFoundException();
    }
    return updtTask;
  }
}

// constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

//   async update(id: string, postData: UpdatePostDto) {
//     const post = await this.postModel
//       .findByIdAndUpdate({ _id: id }, postData, { new: true })
//       .populate('author')
//       .populate('categories')
//       .populate('series');
//     if (!post) {
//       throw new NotFoundException();
//     }
//     return post;
//   }
