const statusHTTPMap: Record<string, number> = {
  INVALID_DATA: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};
  
export default function mapStatusHTTP(type: string): number {
  return statusHTTPMap[type];
}