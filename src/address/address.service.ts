import { Inject, Injectable, Logger } from "@nestjs/common";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
import { PrismaService } from "../common/prisma.service";
import { ValidationService } from "../common/validation.service";
import type { User } from "@prisma/client";
import { AddressResponse, CreateAddressRequest } from "../model/address.model";
import { AddressValidation } from "./address.validation";
import { ContactService } from "../contact/contact.service";

@Injectable()
export class AddressService{
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
    private prismaService: PrismaService,
    private validationService: ValidationService,
    private contactService: ContactService
  ) {}

  async create(user: User, request: CreateAddressRequest): Promise<AddressResponse> {
    this.logger.debug(`AddressService.create(${JSON.stringify(user)}, ${JSON.stringify(request)})`)
    const createRequest: CreateAddressRequest = this.validationService.validate(AddressValidation.CREATE, request)

    await this.contactService.checkContactMustExist(user.username, createRequest.contact_id)

    const address = await this.prismaService.address.create({
      data: createRequest
    })

    return {
      id: address.id,
      city: address.city,
      street: address.street,
      province: address.province,
      country: address.country,
      postal_code: address.postal_code
    }
  }
}