// toastService.ts
import { notification } from 'antd';

// Function to show a success notification
const showSuccess = (message: string) => {
  notification.success({
    message: 'Success',
    description: message,
    placement: 'topRight', // Adjust the placement as needed
  });
};

// Function to show an error notification
const showError = (message: string) => {
  notification.error({
    message: 'Error',
    description: message,
    placement: 'topRight', // Adjust the placement as needed
  });
};

// Export the notification functions
export { showSuccess, showError };
