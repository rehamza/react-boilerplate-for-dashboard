export const isVerifyUser = (role: string | undefined, requiredRole: string[] | undefined) => {
  return requiredRole?.some((v) => v === role);
};
