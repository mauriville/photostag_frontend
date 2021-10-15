import MainService from "@/services/MainService.js";

export default {
    name: "Principal",
    data() {
        let ss = new MainService();
        return {
            msg: "Principal",
            ss: ss,
            ajax: {
                "url": ss.indexPersona(),
                headers: ss.getToken(),
            },
        };
    },
    methods: {
    },
    components: {
    },
    mounted() {
    }
};