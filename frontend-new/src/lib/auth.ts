const AUTH_STORAGE_KEY = 'dealtech-ui-demo-auth';

export function hasAuthSession() {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
}

export function setAuthSession() {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(AUTH_STORAGE_KEY, 'true');
}

export function clearAuthSession() {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(AUTH_STORAGE_KEY);
}
