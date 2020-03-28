import request from 'umi-request';

export async function fakeSubmitForm(params: any) {
  return request('/api/forms', {
    method: 'POST',
    data: params,
  });
}

export async function accidentSubmitForm(params: any) {
  return request('/api/accident/edit', {
    method: 'POST',
    data: params,
  });
}

export async function fetchAccident(id: string) {
  return request(`/api/accident/${id}`);
}
