import { useEffect, useRef } from "react";
import { Trash2, X } from "lucide-react";

type DeleteCustomerModalProps = {
  customerName: string;
  isDeleting: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

const DeleteCustomerModal = ({
  customerName,
  isDeleting,
  onCancel,
  onConfirm,
}: DeleteCustomerModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousActiveElement.current = document.activeElement as HTMLElement;

    document.body.style.overflow = "hidden";

    const dialog = dialogRef.current;

    if (!dialog) return;

    const focusableElements = dialog.querySelectorAll<HTMLElement>(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
    );

    const firstFocusableElement = focusableElements[0];

    firstFocusableElement?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isDeleting) {
        onCancel();
      }

      if (event.key === "Tab") {
        const elements = dialog.querySelectorAll<HTMLElement>(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
        );

        const first = elements[0];
        const last = elements[elements.length - 1];

        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }

        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "";

      previousActiveElement.current?.focus();
    };
  }, [isDeleting, onCancel]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && !isDeleting) {
      onCancel();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
      onMouseDown={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-customer-title"
        aria-describedby="delete-customer-description"
        tabIndex={-1}
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl outline-none"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onCancel}
          disabled={isDeleting}
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <Trash2 className="h-8 w-8 text-red-600" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-5 text-center">
          <h2
            id="delete-customer-title"
            className="text-xl font-bold text-gray-900"
          >
            Are you sure?
          </h2>

          <p
            id="delete-customer-description"
            className="mt-3 px-4 text-sm leading-6 text-gray-500"
          >
            Do you really want to delete{" "}
            <span className="font-semibold text-gray-900">{customerName}</span>
            ?
            <br />
            This process cannot be undone.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-7 flex justify-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={isDeleting}
            className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-600 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="rounded-full border border-red-600 bg-red-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCustomerModal;
