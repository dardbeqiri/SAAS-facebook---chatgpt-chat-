import { Controller, Get, Post, Param, Body, Query, Res, Req } from '@nestjs/common';
import { MessengerService } from './messenger.service';

@Controller('webhook/messenger')
export class MessengerController {
  constructor(private readonly messengerService: MessengerService) {}

  // Facebook webhook verification (GET)
  @Get(':companyId')
  async verifyWebhook(
    @Param('companyId') companyId: string,
    @Query('hub.mode') mode: string,
    @Query('hub.verify_token') token: string,
    @Query('hub.challenge') challenge: string,
    @Res() res
  ) {
    const result = await this.messengerService.verifyWebhook(mode, token, challenge);
    if (result) return res.status(200).send(result);
    return res.status(403).send('Forbidden');
  }

  // Webhook message handler (POST)
  @Post(':companyId')
  async receiveMessage(
    @Param('companyId') companyId: string,
    @Body() body: any,
  ) {
    return this.messengerService.handleIncomingMessage(companyId, body);
  }
}
