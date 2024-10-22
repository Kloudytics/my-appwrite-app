import { Client, Account, ID } from "appwrite";

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

console.log("Appwrite Endpoint:", endpoint);
console.log("Appwrite Project ID:", projectId);

export const client = new Client();

client.setEndpoint(endpoint!).setProject(projectId!);

export const account = new Account(client);
export { ID };
