import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const document = inject(DOCUMENT);
  const platformId = inject(PLATFORM_ID);
  
  if (!isPlatformBrowser(platformId)) return true;

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
  };

  const access = getCookie('access-granted') === 'true';

  if (access) {
    return true;
  } 

  const secret = route.queryParams['secret'];
  if (secret) {
    globalThis.location.href = `/api/portal-admin?secret=${secret}`;
    return false;
  }

  router.navigate(['/not-found']);
  return false;
};