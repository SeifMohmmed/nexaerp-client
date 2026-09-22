import { Link, useParams } from "react-router-dom";
import { useCustomer } from "../../../../Services/Customers/Customers";

const CustomerProfile = () => {
  const { id } = useParams<{ id: string }>();

  const { data: customer, isLoading, isError, error } = useCustomer(id);

  // ================================
  // Loading
  // ================================

  if (isLoading) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <p className="text-gray-500">Loading customer...</p>
      </div>
    );
  }

  // ================================
  // Error
  // ================================

  if (isError) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6">
        <h2 className="font-semibold text-red-700">Failed to load customer</h2>

        <p className="mt-2 text-sm text-red-600">{error.message}</p>

        <Link
          to="/dashboard/customers"
          className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Customers
        </Link>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-6">
        <p className="text-gray-500">Customer not found.</p>
      </div>
    );
  }

  return (
    <section className="w-full">
      {/* ================================
          Header
      ================================= */}

      <div className="mb-6">
        <Link
          to="/dashboard/customers"
          className="text-sm font-medium text-gray-500 hover:text-gray-900"
        >
          ← Back to Customers
        </Link>

        <div className="mt-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            Customer Details
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            View customer information.
          </p>
        </div>
      </div>

      {/* ================================
          Customer Card
      ================================= */}

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        {/* Customer Header */}

        <div className="border-b border-gray-200 bg-gray-50 px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-semibold text-blue-600">
              {customer.name.charAt(0).toUpperCase()}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {customer.name}
              </h2>

              <p className="text-sm text-gray-500">{customer.email}</p>
            </div>
          </div>
        </div>

        {/* Customer Information */}

        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
          {/* Name */}

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">Name</p>

            <p className="mt-1 text-sm font-medium text-gray-900">
              {customer.name}
            </p>
          </div>

          {/* Email */}

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">Email</p>

            <p className="mt-1 text-sm text-gray-900">{customer.email}</p>
          </div>

          {/* Phone */}

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">Phone</p>

            <p className="mt-1 text-sm text-gray-900">{customer.phone}</p>
          </div>

          {/* Tax ID */}

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Tax ID
            </p>

            <p className="mt-1 text-sm text-gray-900">{customer.taxId}</p>
          </div>

          {/* Address */}

          <div className="sm:col-span-2">
            <p className="text-xs font-medium uppercase text-gray-500">
              Address
            </p>

            <p className="mt-1 text-sm text-gray-900">{customer.address}</p>
          </div>

          {/* City */}

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">City</p>

            <p className="mt-1 text-sm text-gray-900">{customer.city}</p>
          </div>

          {/* Country */}

          <div>
            <p className="text-xs font-medium uppercase text-gray-500">
              Country
            </p>

            <p className="mt-1 text-sm text-gray-900">{customer.country}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerProfile;
