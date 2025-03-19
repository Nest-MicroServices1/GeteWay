import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, PRODUCT_SERVIVE } from 'src/config';

@Module({
  controllers: [ProductsController],
  providers: [],
  //configiracion al microservicio de Products-ms mediante TCP
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVIVE,
        transport: Transport.TCP,
        options: {
          host: envs.productMicroserviceHost,
          port: envs.productMicroservicePort,
        },
      },
    ]),
  ],
})
export class ProductsModule {}
