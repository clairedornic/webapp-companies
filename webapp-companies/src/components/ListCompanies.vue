<template>
    <div>
        <ul class="grid-card">
            <n-card v-for="company in companies" :key="company.id">
                <template #cover>
                    <img src="https://picsum.photos/300/175">
                </template>
                <template #default>
                    <div class="content">
                        <div class="container-infos">
                            <h2>{{ company.name }}</h2>
                            <p>SIREN : {{ company.siren }}</p>
                            <p>Number of establishments : {{ company.nb_establishments }}</p>
                        </div>
                        <div class="container-button">
                            <n-button round strong secondary type="primary" @click="handleClick(company.id)">Details</n-button>
                        </div>
                    </div>
                </template>
            </n-card>
        </ul>
    </div>
</template>
<script>
import api from '@/services/api.js';
import { NCard, NButton } from 'naive-ui'

export default {
  data() {
    return {
      companies: [],
    };
  },
  mounted() {
    this.fetchCompanies();
  },
  methods: {
    async fetchCompanies() {
      try {
        const response = await api.getCompanies();
        this.companies = response.data;
        console.log(this.companies);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    },
    handleClick(companyId) {
      this.$router.push({ name: 'CompanyDetails', params: { id: companyId } });
    },
  },
  components: {
    NCard,
    NButton
  },
};
</script>
<style scoped>
    .grid-card {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 40px;
        grid-auto-rows: minmax(100px, auto);
        justify-items: center;
        margin-top: 4rem;
        padding: 0;
    }
    .n-card {
        max-width: 300px;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    h2 {
        font-size: 1em;
    }

    .container-button {
        display: flex;
        justify-content: flex-end;
        margin-top: 2em;
    }

    @media screen and (max-width: 640px) {
        .grid-card {      
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20px;
        }
    }

</style>