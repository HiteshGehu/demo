import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
 
const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isLogin = localStorage.getItem('isLogin') === 'true';
 
  if (isLogin) {
    return true;
  }
 
  router.navigate(['/']); 
  return false;
};
 
export default authGuard;