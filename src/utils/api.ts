// Example API utility
export const fetchData = async <T = any>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}; 