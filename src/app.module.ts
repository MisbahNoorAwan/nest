import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';

import { MongooseModule } from '@nestjs/mongoose';
import config from "./config/keys";

@Module({
  imports: [RolesModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
