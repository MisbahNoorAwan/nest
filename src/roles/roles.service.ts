import { Injectable } from '@nestjs/common';
import { Role } from './interfaces/roles/roles.interface';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RolesService {

    constructor(@InjectModel('Role') private readonly roleModel: Model<Role>) { };

    async findAll(): Promise<Role[]> {
        return this.roleModel.find().select({ _id: 0, name: 1 });
    }
}
