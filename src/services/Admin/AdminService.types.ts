


export interface IUserService {
       session
};

export enum ERoles {
  ADMIN="ADMIN",
  SUPER_ADMIN="SUPER_ADMIN"
}

interface IAdminBase {
  firstName: string;
  lastName: string;
  email: string;
};

export interface IAdmin extends IAdminBase {
  role: ERoles.ADMIN;
  permissions: []
}

export interface ISuperAdmin extends IAdminBase {
  role: ERoles.SUPER_ADMIN;
  permissions: []
}
