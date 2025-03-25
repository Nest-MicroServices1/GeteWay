import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [ProductsController],
  providers: [],
  //configiracion al microservicio de Products-ms mediante NATS
  imports: [NatsModule],
})
export class ProductsModule {}
