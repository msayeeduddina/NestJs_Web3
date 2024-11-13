import { Module } from '@nestjs/common';
import { Feature3Module } from './FeatureModule/feature3.module';

@Module({
  imports: [Feature3Module],
  controllers: [],
  providers: [],
})
export class ChatModule {
  constructor() {
    console.log('Chat Module');
  }
}