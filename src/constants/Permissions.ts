export const Permissions = {
  UsersRead: "users:read",
  UsersUpdateRoles: "users:update-roles",

  RolesRead: "roles:read",
  RolesAssign: "roles:assign",
  RolesRemove: "roles:remove",
  RolesUpdate: "roles:update",

  CustomersRead: "customers:read",
  CustomersCreate: "customers:create",
  CustomersUpdate: "customers:update",
  CustomersDelete: "customers:delete",

  SuppliersRead: "suppliers:read",
  SuppliersCreate: "suppliers:create",
  SuppliersUpdate: "suppliers:update",
  SuppliersDelete: "suppliers:delete",

  ProductsRead: "products:read",
  ProductsCreate: "products:create",
  ProductsUpdate: "products:update",
  ProductsDelete: "products:delete",
  ProductsAdjustStock: "products:adjust-stock",

  CategoriesRead: "categories:read",
  CategoriesCreate: "categories:create",
  CategoriesUpdate: "categories:update",
  CategoriesDelete: "categories:delete",

  DepartmentsRead: "departments:read",
  DepartmentsCreate: "departments:create",
  DepartmentsUpdate: "departments:update",
  DepartmentsDelete: "departments:delete",

  EmployeesRead: "employees:read",
  EmployeesCreate: "employees:create",
  EmployeesUpdate: "employees:update",
  EmployeesDelete: "employees:delete",

  OrdersRead: "orders:read",
  OrdersCreate: "orders:create",
  OrdersUpdate: "orders:update",
  OrdersUpdateStatus: "orders:update-status",
  OrdersDelete: "orders:delete",

  PurchaseOrdersRead: "purchase-orders:read",
  PurchaseOrdersCreate: "purchase-orders:create",
  PurchaseOrdersUpdate: "purchase-orders:update",
  PurchaseOrdersUpdateStatus: "purchase-orders:update-status",

  InvoicesRead: "invoices:read",
  InvoicesCreate: "invoices:create",
  InvoicesUpdate: "invoices:update",
  InvoicesDelete: "invoices:delete",
  InvoicesPay: "invoices:pay",
  InvoicesDownloadPdf: "invoices:download-pdf",
} as const;
