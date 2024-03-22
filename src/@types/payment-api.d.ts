export interface PaymentAPIResponse {
  id: string;
  amount: number;
  currency: string;
  status: string;
  platform: {
    id: string;
    name?: string;
    slug: string;
    webhook_url: string;
    createdAt: Date | string;
    updatedAt: Date | string;
  };
  pixKey: string;
  qrCode: string;
  transactionId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  webhookUrl: string;
}
