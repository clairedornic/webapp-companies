<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { NCard } from 'naive-ui'
  import api from '@/services/api.js';

  const route = useRoute();
  const id = ref(null);
  const isLoading = ref(true);
  const companyData = ref(null);
  const companyEstablishments = ref(null);
  
  const getCompanyById = async (companyId) => {
    try {
        const response = await api.getCompanyById(companyId);
        return response.data;
    } catch (error) {
        console.error('Error fetching company by ID:', error);
        return null;
    }
  };

  const getCompanyEstablishmentsById = async (companyId) => {
    try {
        const response = await api.getCompanyEstablishments(companyId);
        return response.data;
    } catch (error) {
        console.error('Error fetching company by ID:', error);
        return null;
    }
  };

  const loadCompanyData = async () => {
    isLoading.value = true;
    companyData.value = await getCompanyById(id.value);
    companyEstablishments.value = await getCompanyEstablishmentsById(id.value);
    console.log(companyData.value);
    console.log(companyEstablishments.value);
    isLoading.value = false;
  };

  onMounted(() => {
    id.value = route.params.id;
    loadCompanyData();
  });
</script>
<template>
    <div class="single-company">
        <div v-if="isLoading">
            <p>Loading company data...</p>
        </div>
        <div v-else>
          <div class="company-infos">
            <div class="img-container">
              <img src="https://picsum.photos/300/450">
            </div>
            <div class="container-infos">
              <h2>{{ companyData.name }}</h2>
              <p>SIREN : {{ companyData.siren }}</p>
              <p>Number of establishments : {{ companyData.nb_establishments }}</p>
            </div>
          </div>
          <ul class="grid-card">
            <h2>Addresses of the different establishments :</h2>
            <n-card v-for="establishment in companyEstablishments" :key="establishment.id">
                <template #default>
                  <p>{{ establishment.address_establishment }}</p>
                </template>
            </n-card>
          </ul>
        </div>
    </div>
</template>
<script>
export default {
  components: {
    NCard,
  },
};
</script>
<style scoped>
  .single-company {
    margin-top: 2em;
  }
  .company-infos {
    display: flex;
    flex-direction: row;
    gap: 2em;
  }
  .grid-card {
    padding: 0;
    margin-top: 2em;
  }

  @media screen and (max-width: 640px) {
    .company-infos {
      flex-direction: column;
    }
  }
</style>