import { Injectable } from '@nestjs/common';

@Injectable()
export class AuditService {
  async log(event: string, meta: any) {
    // In production, persist to DB or external log service
    console.log(`[AUDIT] ${event}`, meta);
  }
}
