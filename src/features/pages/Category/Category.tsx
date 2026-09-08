import { Search, Tags } from "lucide-react";
import { useState } from "react";
import { useCategories } from "../../../Services/Categories/Category";

const Categories = () => {
  const [search, setSearch] = useState("");

  const { data: categories, isLoading, isError, error } = useCategories();

  const filteredCategories =
    categories?.filter((category) =>
      category.name?.toLowerCase().includes(search.toLowerCase()),
    ) ?? [];

  return (
    <div className="min-h-screen bg-[#F8F7FA] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              Categories
            </h1>

            <p className="mt-1 text-sm text-muted">
              Manage your product categories
            </p>
          </div>

          <div className="flex h-11 items-center gap-2 rounded-xl bg-white px-4 shadow-sm ring-1 ring-[#E5E1E8]">
            <Tags size={18} className="text-accent" />

            <span className="text-sm font-medium text-foreground">
              {categories?.length ?? 0}
            </span>

            <span className="text-sm text-muted">Categories</span>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search categories..."
              className="h-11 w-full rounded-xl border border-border bg-white pl-10 pr-4 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-[#A744F3]/10"
            />
          </div>
        </div>

        {/* Content */}
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          {/* Loading */}
          {isLoading && (
            <div className="divide-y divide-border">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center gap-4 px-5 py-4">
                  <div className="h-10 w-10 animate-pulse rounded-xl bg-primary-light" />

                  <div className="h-4 w-40 animate-pulse rounded bg-primary-light" />
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {isError && (
            <div className="flex min-h-60 flex-col items-center justify-center px-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                <Tags size={22} className="text-red-500" />
              </div>

              <h2 className="text-base font-semibold text-foreground">
                Failed to load categories
              </h2>

              <p className="mt-1 max-w-md text-sm text-muted">
                {error.message}
              </p>
            </div>
          )}

          {/* Empty */}
          {!isLoading && !isError && filteredCategories.length === 0 && (
            <div className="flex min-h-60 flex-col items-center justify-center px-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-light">
                <Tags size={22} className="text-accent" />
              </div>

              <h2 className="text-base font-semibold text-foreground">
                No categories found
              </h2>

              <p className="mt-1 text-sm text-muted">
                {search
                  ? "Try a different search term."
                  : "There are no categories available."}
              </p>
            </div>
          )}

          {/* Table */}
          {!isLoading && !isError && filteredCategories.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-120">
                <thead>
                  <tr className="border-b border-border bg-[#FAF9FB]">
                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted">
                      Category
                    </th>

                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-muted">
                      #
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-border">
                  {filteredCategories.map((category) => (
                    <tr
                      key={category.id}
                      className="transition hover:bg-[#FAF8FC]"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                            <Tags size={18} className="text-accent" />
                          </div>

                          <span className="text-sm font-medium text-foreground">
                            {category.name ?? "Unnamed Category"}
                          </span>
                        </div>
                      </td>

                      <td className="px-5 py-4 text-right text-sm text-muted">
                        {filteredCategories.indexOf(category) + 1}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
