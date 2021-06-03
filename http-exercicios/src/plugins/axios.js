import Vue from "vue";
import axios from "axios";

// axios.defaults.baseURL = 'https://curso-vue-9af01-default-rtdb.firebaseio.com/';

//Na linha abaixo, significa que pra cada requisição que ser feita, terá que mandar essa chave('Authorization'):
// axios.defaults.headers.common['Authorization'] = 'abc123';

//Na linha abaixo, to dizendo que só aceita nas requisições do tipo GET resposta do tipo 'application/json':
// axios.defaults.headers.get['Accepts'] = 'application/json';

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios;

        /*Esse exemplo não estou mexendo especificamente no global, mas sim na instância.
        * Ou seja, eu posso especiicar também(se quiser) outras URL´s, de outros servidores.
        * ex: "api de sistema tal" - "api do sistema do google"*/
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-9af01-default-rtdb.firebaseio.com/',
            headers: {

                // Na linha abaixo, to dizendo que terá que ter um 'Authorization' apenas nos GET´s com o tal determinado valor('abc123'):
                // get: {"Authorization": "abc123",}

                // Se eu quiser colocar o Authorization de forma genérica para todas as requisições, é só fazer assim:
                // "Authorization": "abc123",

            }
        });

        //Persistindo a requisição - interceptor:
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method);
            // if (config.method == 'post') {
            //     config.method = 'put';
            // }
            return config;
        }, error => Promise.reject(error));


        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = [];

            // for (let chave in res.data) {
            //     array.push({ id: chave, ...res.data[chave] });
            // }

            // res.data = array;
            return res;
        }, error => Promise.reject(error));
    }
});