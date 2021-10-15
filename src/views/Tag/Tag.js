import MainService from "@/services/MainService.js";

export default {
    name: "Tag",
    data() {
        let ss = new MainService();
        return {
            msg: "Tag",
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