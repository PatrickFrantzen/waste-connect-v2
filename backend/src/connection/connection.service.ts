import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { getConnectionToken } from '@nestjs/mongoose';

@Injectable()
export class ConnectionService implements OnModuleInit {

        private readonly logger = new Logger(ConnectionService.name);

        constructor(@Inject(getConnectionToken()) private readonly connection) {}

        onModuleInit() {
                this.connection.on('connected', () => {
                    this.logger.log('MongoDB is connected');
                });
                this.connection.on('disconnected', () => {
                    this.logger.log('MongoDB is disconnected');
                });

                // Check the initial connection state
                switch (this.connection.readyState) {
                    case 0:
                        this.logger.log('MongoDB is disconnected');
                        break;
                    case 1:
                        this.logger.log('MongoDB is connected');
                        break;
                    case 2:
                        this.logger.log('MongoDB is connecting');
                        break;
                    case 3:
                        this.logger.log('MongoDB is disconnecting');
                        break;
                }
        }
}
