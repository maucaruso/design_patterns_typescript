import { PermissionType } from "./PermissionType";

interface DataBaseItem {
  email: string;
  password: string;
  permission: PermissionType;
}

export const DataBase: DataBaseItem[] = [
  {
    email: "teste@teste.com.br",
    password: "123456",
    permission: PermissionType.ADMIN
  },
  {
    email: "user@teste.com.br",
    password: "12345678",
    permission: PermissionType.USER
  }
]