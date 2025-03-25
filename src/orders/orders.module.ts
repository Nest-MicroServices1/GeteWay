import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [OrdersController],
  providers: [],
  //configiracion al microservicio de Products-ms mediante NAST
  imports: [NatsModule],

})
export class OrdersModule {}
