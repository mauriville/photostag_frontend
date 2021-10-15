import MainService from "@/services/MainService.js";

export default {
    name: "Image",
    data() {
        let ss = new MainService();
        return {
            msg: "Image",
            ss: ss,
            ajax: {
                "url": ss.indexImage(),
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