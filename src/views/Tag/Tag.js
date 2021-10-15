import MainService from "@/services/MainService.js";
import dataTable from "@/components/Datatable";
window.$ = window.jQuery = require("jquery");

export default {
    name: "Tag",
    data() {
        let ss = new MainService();
        return {
            msg: "Tag",
            ss: ss,
            ajax: {
                "url": ss.indexTag(),
                headers: ss.getToken(),
            },
            columns: [
                { data: 'id', name: 'id', orderable: false, searchable: false, visible: false },
                { data: 'DT_RowIndex', name: 'DT_RowIndex', title: 'N', orderable: false, searchable: false },
                { data: 'Label', name: 'Label', title: 'Label' },
                {
                    data: 'action',
                    orderable: false,
                    title: 'Acciones',
                    searchable: false
                },
            ],
            tags: [],
            tag: {},
            isLoading: false,
            errorBag: {}
        };
    },
    methods: {
        newTag() {
            this.tag = {};
            this.$refs['frm-tag'].show();
        },
        showTag(id) {
            this.isLoading=true;
            this.ss.showTag(id).then(
                (result) => {
                    let response = result.data;
                    this.tag = response.data;
                    this.$refs['view-tag'].show();
                    this.isLoading=false;
                }
            ).catch(error => {
                console.log(error);
                this.isLoading=false;
            });
        },
        editTag() {
            this.$refs['frm-tag'].show();
            this.$refs['view-tag'].hide();
        },
        cancelTag() {
            if (this.tag.id) {
                this.$refs['view-tag'].show();
            }
            this.$refs['frm-tag'].hide();
        },
        saveTag() {
            this.ss.storeTag(this.tag).then(
                (result) => {
                    console.log(result);
                    let response = result.data;
                    this.$bvToast.toast(
                        response.msg,
                        {
                            title: 'Correcto',
                            variant: 'success',
                            autoHideDelay: 5000
                        }
                    )
                    //this.$refs['view-consulta'].show(); //para volver al modal
                    console.log(response);
                    this.$refs['frm-tag'].hide();
                    this.$refs['datatable-tag'].reload();
                })
                .catch((error) => {
                    this.errorBag = error.response.data.errors;
                    this.$bvToast.toast(
                        'Problema al Guardar el Registro, favor verificar los Datos',
                        {
                            title: 'Error',
                            variant: 'danger',
                            autoHideDelay: 5000
                        }
                    )
                });
        },
        deleteTag() {
            this.$swal({
                title: "Estas seguro que deseas eliminar?",
                text: "Esta accion es irreversible!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.ss.destroyTag(this.tag)
                            .then((result) => {
                                let response = result.data;
                                console.log(response);
                                this.$bvToast.toast(
                                    response.msg,
                                    {
                                        title: 'Correcto',
                                        variant: 'success',
                                        autoHideDelay: 5000
                                    }
                                )
                                this.$refs['view-tag'].hide();
                                this.$refs['datatable-tag'].reload();
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    } else {
                        //swal("Your imaginary file is safe!");
                    }
                });
        },
        draw() {
            window.$('.btn-datatable-Tag').on('click', (evt) => {
                const data = window.$(evt.target)[0].id;
                this.showTag(data);
            });
        }
    },
    components: {
        dataTable
    },
    mounted() {
    }
};
