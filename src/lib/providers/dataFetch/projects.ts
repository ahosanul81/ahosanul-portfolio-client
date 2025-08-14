import { projectApi } from "@/redux/features/project/projectApi";
import { store } from "@/redux/store";

export async function getAllProjects() {
  const result = await store.dispatch(
    projectApi.endpoints.getAllProjects.initiate()
  );

  return result.data; // This is your fetched data
}
