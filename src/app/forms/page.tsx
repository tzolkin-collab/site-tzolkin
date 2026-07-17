import { redirect } from 'next/navigation';

export default async function FormsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams;
  const query = new URLSearchParams();
  if (params?.service) query.set('service', String(params.service));
  if (params?.interesse) query.set('interesse', String(params.interesse));
  const qs = query.toString();

  redirect(`/forms/contato${qs ? `?${qs}` : ''}`);
}
