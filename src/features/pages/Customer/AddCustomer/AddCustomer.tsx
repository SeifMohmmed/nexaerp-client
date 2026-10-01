import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  useAddCustomer,
  type AddCustomerRequest,
} from "../../../../Services/Customers/Customers";

const AddCustomer = () => {
  const navigate = useNavigate();

  const createCustomer = useAddCustomer();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCustomerRequest>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      taxId: "",
    },
  });

  const onSubmit = (data: AddCustomerRequest) => {
    createCustomer.mutate(data, {
      onSuccess: () => {
        toast.success("Customer created successfully.");

        navigate("/dashboard/customers");
      },

      onError: (error) => {
        toast.error(error.message || "Failed to create customer.");
      },
    });
  };

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-6">
        <button
          type="button"
          onClick={() => navigate("/dashboard/customers")}
          className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          ← Back to Customers
        </button>

        <div className="mt-4">
          <h1 className="text-2xl font-semibold text-gray-900">Add Customer</h1>

          <p className="mt-1 text-sm text-gray-500">
            Create a new customer and add their information.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                {...register("name", {
                  required: "Name is required.",
                })}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#31214E] focus:ring-2 focus:ring-[#31214E]/10"
                placeholder="Enter customer name"
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required.",
                })}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#31214E] focus:ring-2 focus:ring-[#31214E]/10"
                placeholder="Enter customer email"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Phone
              </label>

              <input
                id="phone"
                type="text"
                {...register("phone", {
                  required: "Phone is required.",
                })}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#31214E] focus:ring-2 focus:ring-[#31214E]/10"
                placeholder="Enter customer phone"
              />

              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Tax ID */}
            <div>
              <label
                htmlFor="taxId"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Tax ID
              </label>

              <input
                id="taxId"
                type="text"
                {...register("taxId", {
                  required: "Tax ID is required.",
                })}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#31214E] focus:ring-2 focus:ring-[#31214E]/10"
                placeholder="Enter tax ID"
              />

              {errors.taxId && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.taxId.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Address
              </label>

              <input
                id="address"
                type="text"
                {...register("address", {
                  required: "Address is required.",
                })}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#31214E] focus:ring-2 focus:ring-[#31214E]/10"
                placeholder="Enter customer address"
              />

              {errors.address && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                City
              </label>

              <input
                id="city"
                type="text"
                {...register("city", {
                  required: "City is required.",
                })}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#31214E] focus:ring-2 focus:ring-[#31214E]/10"
                placeholder="Enter city"
              />

              {errors.city && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.city.message}
                </p>
              )}
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Country
              </label>

              <input
                id="country"
                type="text"
                {...register("country", {
                  required: "Country is required.",
                })}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#31214E] focus:ring-2 focus:ring-[#31214E]/10"
                placeholder="Enter country"
              />

              {errors.country && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.country.message}
                </p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-gray-50 px-6 py-4">
            <button
              type="button"
              onClick={() => navigate("/dashboard/customers")}
              className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={createCustomer.isPending}
              className="rounded-md bg-[#31214E] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#3B2963] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {createCustomer.isPending ? "Creating..." : "Create Customer"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddCustomer;
