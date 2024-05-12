import { toast } from "react-toastify";

export const toaster = {
    success: (message) => {
        toast.success(message, {
            position: "top-right"
        });
    },
    error: (message) => {
        toast.error(message, {
            position: "top-right"
        });
    }
}