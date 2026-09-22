import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useCustomers } from "../../../Services/Customers/Customers";
import PermissionGuard from "../../../Guards/PermissionGuard";
import { Permissions } from "../../../constants/Permissions";

const Customers = () => {
  const [page, setPage] = useState(1);

  // Value shown inside the search input
  const [search, setSearch] = useState("");

  // Value actually sent to the API
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // ================================
  // Search Debounce
  // ================================
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const { data, isLoading, isError, error } = useCustomers({
    page,
    pageSize: 10,
    search: debouncedSearch,
  });

  const customers = data?.items ?? [];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // ================================
  // Loading
  // ================================
  if (isLoading) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <p className="text-gray-500">Loading customers...</p>
      </div>
    );
  }

  // ================================
  // Error
  // ================================
  if (isError) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6">
        <h2 className="font-semibold text-red-700">Failed to load customers</h2>

        <p className="mt-2 text-sm text-red-600">{error.message}</p>
      </div>
    );
  }

  return (
    <section className="w-full">
      {/* ================================
          Header
      ================================= */}

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your customers and their information.
          </p>
        </div>

        <PermissionGuard permission={Permissions.CustomersCreate}>
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            + Add Customer
          </button>
        </PermissionGuard>
      </div>

      {/* ================================
          Table Container
      ================================= */}

      <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        {/* ================================
            Search
        ================================= */}

        <div className="border-b border-gray-200 p-4">
          <label htmlFor="customer-search" className="sr-only">
            Search customers
          </label>

          <div className="relative w-full sm:max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-4 w-4 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            <input
              id="customer-search"
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search customers..."
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* ================================
            Table
        ================================= */}

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="border-b border-gray-200 bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Customer
                </th>

                <th scope="col" className="px-6 py-4 font-semibold">
                  Email
                </th>

                <th scope="col" className="px-6 py-4 font-semibold">
                  Phone
                </th>

                <th scope="col" className="px-6 py-4 font-semibold">
                  Location
                </th>

                <th scope="col" className="px-6 py-4 font-semibold">
                  Tax ID
                </th>

                <th scope="col" className="px-6 py-4 text-right font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {customers.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    No customers found.
                  </td>
                </tr>
              ) : (
                customers.map((customer) => (
                  <tr key={customer.id} className="transition hover:bg-gray-50">
                    {/* ================================
                        Customer
                    ================================= */}

                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                          {customer.name.charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <div className="font-medium text-gray-900">
                            {customer.name}
                          </div>

                          <div className="text-xs text-gray-500">
                            {customer.city}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* ================================
                        Email
                    ================================= */}

                    <td className="whitespace-nowrap px-6 py-4">
                      {customer.email}
                    </td>

                    {/* ================================
                        Phone
                    ================================= */}

                    <td className="whitespace-nowrap px-6 py-4">
                      {customer.phone}
                    </td>

                    {/* ================================
                        Location
                    ================================= */}

                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="text-gray-900">{customer.city}</div>

                      <div className="text-xs text-gray-500">
                        {customer.country}
                      </div>
                    </td>

                    {/* ================================
                        Tax ID
                    ================================= */}

                    <td className="whitespace-nowrap px-6 py-4">
                      {customer.taxId}
                    </td>

                    {/* ================================
                        Actions
                    ================================= */}

                    <td className="whitespace-nowrap px-6 py-4 text-right">
                      <div className="flex justify-end gap-3">
                        {/* View */}

                        <Link
                          to={`/dashboard/customers/${customer.id}`}
                          className="font-medium text-gray-600 transition hover:text-gray-900 hover:underline"
                        >
                          View
                        </Link>

                        {/* Edit */}

                        <PermissionGuard
                          permission={Permissions.CustomersUpdate}
                        >
                          <button
                            type="button"
                            className="font-medium text-blue-600 hover:underline"
                          >
                            Edit
                          </button>
                        </PermissionGuard>

                        {/* Delete */}

                        <PermissionGuard
                          permission={Permissions.CustomersDelete}
                        >
                          <button
                            type="button"
                            className="font-medium text-red-600 hover:underline"
                          >
                            Delete
                          </button>
                        </PermissionGuard>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* ================================
            Pagination
        ================================= */}

        <div className="flex flex-col gap-3 border-t border-gray-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Showing page{" "}
            <span className="font-medium text-gray-900">{data?.page}</span> of{" "}
            <span className="font-medium text-gray-900">
              {data?.totalPages}
            </span>
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              disabled={!data?.hasPreviousPage}
              onClick={() => setPage((current) => current - 1)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            <button
              type="button"
              disabled={!data?.hasNextPage}
              onClick={() => setPage((current) => current + 1)}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
