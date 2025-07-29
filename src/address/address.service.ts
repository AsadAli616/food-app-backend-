import { BadRequestException, Injectable } from '@nestjs/common';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAddressDto } from './dto/address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async createAddress(createAddressDto: CreateAddressDto): Promise<Address> {
    const existingAddress = await this.addressRepository.findOne({
      where: { address: createAddressDto.address },
    });
    if (existingAddress) {
      throw new BadRequestException('Address already exists');
    }
    const address = this.addressRepository.create(createAddressDto);
    return this.addressRepository.save(address);
  }
  async updateAddress(
    id: number,
    updateAddressDto: Partial<CreateAddressDto>,
  ): Promise<Address> {
    const address = await this.addressRepository.findOne({ where: { id } });
    if (!address) {
      throw new BadRequestException('Address not found');
    }
    Object.assign(address, updateAddressDto);
    return this.addressRepository.save(address);
  }
  async deleteAddress(id: number): Promise<void> {
    const address = await this.addressRepository.findOne({ where: { id } });
    if (!address) {
      throw new BadRequestException('Address not found');
    }
    await this.addressRepository.remove(address);
  }
}
