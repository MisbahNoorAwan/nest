import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

import { RolesService } from './roles.service';
import { Role } from './interfaces/roles/roles.interface';

@Controller('api/auth/fetchroles')
export class RolesController {

    constructor(private readonly rolesService: RolesService) { }

    @Get()
    async findAll(@Res() res: Response) {
        const rolesArray = await this.rolesService.findAll();
        const roles: string[] = rolesArray.map((roles: Role) => roles.name);
        return res.status(200).json({ roles });
    }
}
