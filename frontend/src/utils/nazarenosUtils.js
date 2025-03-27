export const createLinkDownload = (url, filename = 'nazarenos.xlsx') => {
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export const exportNazarenosData = async (
  token,
  axiosGetRequest,
  API_URL,
  ShowNotify,
) => {
  const [_, response] = await axiosGetRequest(
    API_URL + '/api/nazareno/excelData',
    {
      headers: { Authorization: `Bearer ${token}` },
      responseType: 'blob',
    },
  );

  if (!response) {
    ShowNotify('danger', 'No tienes acceso a esta función');
    return null;
  }

  const url = window.URL.createObjectURL(
    new Blob([response], { type: response.type }),
  );

  createLinkDownload(url);
};

export const filterNazarenosData = (data, search) => {
  return (
    data?.cotent?.filter(
      row =>
        row.code?.toString().toLowerCase().includes(search.toLowerCase()) ||
        row.documentNumber
          ?.toString()
          .toLowerCase()
          .includes(search.toLowerCase()),
    ) || []
  );
};
