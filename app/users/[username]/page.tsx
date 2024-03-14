import { headers } from "next/headers";

export default function Users() {
  const headerList = headers();

  const hostname = headerList.get("host");

  return <h1>Hello from subdomain {hostname} <br /> real domain is: {process.env.DOMAIN}</h1>;
}