import MainService from "@/services/MainService.js";
import dataTable from "@/components/Datatable";
window.$ = window.jQuery = require("jquery");

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
            baseURL: process.env.VUE_APP_MAIN_SERVICE,
            columns: [
                { data: 'id', name: 'id', orderable: false, searchable: false, visible: false },
                { data: 'DT_RowIndex', name: 'DT_RowIndex', title: 'N', orderable: false, searchable: false },
                { data: 'Tittle', name: 'Tittle', title: 'Tittle' },
                {
                    data: 'action',
                    orderable: false,
                    title: 'Acciones',
                    searchable: false
                },
            ],

            tags: [],
            tag: {},
            queryTag: "",

            tagimage: {},
            images: [],
            image: {},
            isLoading: false,
            errorBag: {},
            isLoadingFile: false
        };
    },
    methods: {
        loadFile(input) {
            this.isLoadingFile = true;
            input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.readAsDataURL(input.files[0]);
                var data = new FormData();
                data.append('File', input.files[0]);
                this.ss.uploadFile(data)
                    .then(result => {
                        if (result.data.success) {
                            this.$bvToast.toast(
                                result.data.msg,
                                {
                                    title: 'Correcto',
                                    variant: 'info',
                                    autoHideDelay: 5000
                                }
                            )
                            this.image.ImageUrl = result.data.data;
                            this.image.ThumbnailUrl = result.data.data;
                        } else {
                            this.$bvToast.toast(
                                result.data.msg,
                                {
                                    title: 'Oops!',
                                    variant: 'danger',
                                    autoHideDelay: 5000
                                }
                            )
                        }
                        this.isLoadingFile = false;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$bvToast.toast(
                            'Error subiendo archivo',
                            {
                                title: 'Oops!',
                                variant: 'danger',
                                autoHideDelay: 5000
                            }
                        )
                        this.isLoadingFile = false;
                    });
            }
        },
        newImage() {
            this.image = {};
            this.$refs['frm-image'].show();
        },
        showImage(id) {
            this.isLoading = true;
            this.ss.showImage(id).then(
                (result) => {
                    let response = result.data;
                    this.image = response.data;
                    this.$refs['view-image'].show();
                    this.isLoading = false;
                }
            ).catch(error => {
                console.log(error);
                this.isLoading = false;
            });
        },
        editImage() {
            this.$refs['frm-image'].show();
            this.$refs['view-image'].hide();
        },
        cancelImage() {
            if (this.image.id) {
                this.$refs['view-image'].show();
            }
            this.$refs['frm-image'].hide();
        },
        saveImage() {
            this.ss.storeImage(this.image).then(
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
                    this.$refs['frm-image'].hide();
                    this.$refs['datatable-image'].reload();
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
        saveTagImage() {
            this.tagimage.Image = this.image.id;
            this.ss.storeTagImage(this.tagimage).then(
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
                    this.showImage(this.image.id);
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
        deleteImage() {
            this.$swal({
                title: "Estas seguro que deseas eliminar?",
                text: "Esta accion es irreversible!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.ss.destroyImage(this.image)
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
                                this.$refs['view-image'].hide();
                                this.$refs['datatable-image'].reload();
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    } else {
                        //swal("Your imaginary file is safe!");
                    }
                });
        },
        deleteTagImage(t) {
            let tagimage = {
                Tag: t,
                Image: this.image.id
            };
            this.$swal({
                title: "Estas seguro que deseas eliminar?",
                text: "Esta accion es irreversible!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.ss.destroyTagImage(tagimage)
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
                                this.showImage(this.image.id);
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
            window.$('.btn-datatable-Image').on('click', (evt) => {
                const data = window.$(evt.target)[0].id;
                this.showImage(data);
            });
        }
    },
    watch: {
        queryTag(q) {
            this.ss.select2Tag(q).then((res) => {
                //console.log(res);
                if (res.data.success) {
                    this.tags = res.data.items;
                } else {
                    this.tags = [];
                }
            })
        }
    },
    components: {
        dataTable
    },
    mounted() {
    }
};
