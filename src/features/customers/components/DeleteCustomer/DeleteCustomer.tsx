import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

import PermissionGuard from "../../../../guards/PermissionGuard";
import { Permissions } from "../../../../constants/Permissions";
import DeleteCustomerModal from "../DeleteCustomerModal/DeleteCustomerModal";
import { useDeleteCustomer } from "../../services/Customers";

type DeleteCustomerProps = {
  customerId: string;
  customerName: string;
};

const DeleteCustomer = ({ customerId, customerName }: DeleteCustomerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const queryClient = useQueryClient();
  const deleteCustomer = useDeleteCustomer();

  const handleDelete = () => {
    deleteCustomer.mutate(customerId, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["customers"],
        });

        setIsModalOpen(false);

        toast.success("Customer deleted successfully.");
      },
      onError: (error) => {
        toast.error(error.message || "Failed to delete customer.");
      },
    });
  };

  return (
    <PermissionGuard permission={Permissions.CustomersDelete}>
      <>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          disabled={deleteCustomer.isPending}
          title="Delete customer"
          className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Trash2 className="h-4 w-4" />
        </button>

        {isModalOpen && (
          <DeleteCustomerModal
            customerName={customerName}
            isDeleting={deleteCustomer.isPending}
            onCancel={() => setIsModalOpen(false)}
            onConfirm={handleDelete}
          />
        )}
      </>
    </PermissionGuard>
  );
};

export default DeleteCustomer;
