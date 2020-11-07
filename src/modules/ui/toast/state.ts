import { ToastModel } from '@ui/models';

/**
 * toast state
 */
class ToastState {
  /**
   * Toast visibility state
   */
  public isToastVisible: boolean = false;
  /**
   * Toast data
   */
  public toastData: ToastModel = null;
}

export { ToastState };
