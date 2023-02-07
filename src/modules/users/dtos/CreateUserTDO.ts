export interface CreateUserTDO {
  data: {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    created_at?: string;
    updated_at?: string;
  }
}