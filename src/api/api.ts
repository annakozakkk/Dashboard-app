export async function fetchCompanies() {
  try {
    const response = await fetch("../data/companies-lookup.json");
    if (!response.ok) {
      throw new Error("Failed to fetch companies data");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
}
