import { INotificationPort } from "../ports/INotificationPort";

export class NotificationService {
  constructor(private notificationPort: INotificationPort) {}

  async getNotifications(userId: string) {
    return this.notificationPort.getUserNotifications(userId);
  }

  async markNotificationAsRead(notificationId: string) {
    return this.notificationPort.markAsRead(notificationId);
  }
}
