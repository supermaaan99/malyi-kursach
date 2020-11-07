/**
 * Toast model
 */
type ToastModel = {
  status: 'success' | 'fail' | 'info';
  title?: string;
  description?: string;
};

export { ToastModel };
