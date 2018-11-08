export class ErrorLogin extends Error {};
export class ErrorForbidden extends Error {};
export class ErrorUncomplete extends Error {};
export class ErrorNotFound extends Error {};

// Test Error matching

const errorMatch = (error, errorType) => error instanceof errorType ;
