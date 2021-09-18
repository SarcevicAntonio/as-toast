import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export interface Toast {
  id: string;
  msg: string;
  type: "info" | "warn";
  removeAfter: number;
}

export const toasts: Writable<Toast[]> = writable([]);

/**
 *
 * @param msg Toast message, can be any HTML.
 * @param type Toast type ('info' or 'warn')
 * @param removeAfter Time in milliseconds the toast will be displayed
 */
export function addToast(msg: string, type: Toast["type"] = "info", removeAfter = 5000): void {
  toasts.update((all) => [
    {
      id: new Date().valueOf() + msg,
      msg,
      type,
      removeAfter,
    },
    ...all,
  ]);
}

export function removeToast(id: string): void {
  toasts.update((all) => all.filter((toast) => toast.id !== id));
}
