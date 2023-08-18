import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
});

export default {
  getCompanies(params) {
    return apiClient.get('/companies', { params });
  },

  getCompanyById(id) {
    return apiClient.get(`/companies/${id}`);
  },

  getCompanyEstablishments(id) {
    return apiClient.get(`/establishments/company/${id}`);
  },
};