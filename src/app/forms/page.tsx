import { redirect } from 'next/navigation';

export default async function FormsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams;
  const service = params?.service;
  const queryString = service ? `?service=${encodeURIComponent(String(service))}` : '';
  
  redirect(`/forms/contato${queryString}`);
}
