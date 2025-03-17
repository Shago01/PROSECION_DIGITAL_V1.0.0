import { toast } from 'react-toastify';

export function ShowNotify(type, message) {
  const op = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    pauseOnHover: true,
  };

  console.log(type, message);

  switch (type) {
    case 'info':
      toast.info(message, op);
      break;
    case 'warning':
      toast.warn(message, op);
      break;
    case 'danger':
      toast.error(message, op);
      break;
    case 'success':
      toast.success(message, op);
      break;
    default:
      break;
  }
}
