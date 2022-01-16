import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/practice'),
    TasksModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
